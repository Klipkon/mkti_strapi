import { google } from "googleapis";
import MailComposer from "nodemailer/lib/mail-composer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import { z } from "zod";

interface Captcha {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  score?: number;
  "error-codes"?: string[];
}

export default {
  sendMail: async (ctx, next, env) => {
    const { email, message, allowToSendMarketingInfo, token } =
      ctx.request.body;

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET}&response=${token}`;

    const captchaRes = await fetch(url, {
      method: "post",
    });

    const captchaData = (await captchaRes.json()) as Captcha;

    if (!captchaData.success || captchaData.score < 0.5) {
      ctx.status = 400;
      ctx.body = { message: "Captcha verification failed!" };
      return;
    }

    const validationSchema = z.object({
      email: z
        .string({ errorMap: () => ({ message: "Nieprawidłowy adres email!" }) })
        .email(),
      message: z
        .string({ errorMap: () => ({ message: "Wiadomość jest wymagana!" }) })
        .min(1)
        .max(1000),
      allowToSendMarketingInfo: z.literal(true, {
        errorMap: () => ({
          message: "Musisz wyrazić zgodę na przetwarzanie danych osobowych!",
        }),
      }),
    });

    try {
      validationSchema.parse({ email, message, allowToSendMarketingInfo });
    } catch (error) {
      ctx.status = 400;
      ctx.body = error.errors;
      return;
    }

    const oAuth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    oAuth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    });

    const encodeMessage = (message) => {
      return Buffer.from(message)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");
    };

    const createMail = async (options) => {
      const mailComposer = new MailComposer(options);
      const message = await mailComposer.compile().build();
      return encodeMessage(message);
    };

    const gmail = google.gmail({
      version: "v1",
      auth: oAuth2Client,
    });

    const options = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `[MKTI - STRONA INTERNETOWA] Zapytanie od ${email}`,
      text: `email: ${email}, text: ${message}`,
      html: `<h1>Zapytanie od ${email}</h1> <h3>Wiadomość:</h3> <p>${message}</p>`,
    } as SMTPTransport.Options;

    const rawMessage = await createMail(options);

    await gmail.users.messages
      .send({
        userId: "me",
        requestBody: {
          raw: rawMessage,
        },
      })
      .then((res) => {
        if (res.status == 200) {
          ctx.body = "Email sent!";
        }

        if (res.status == 500) {
          ctx.body = "Email not sent!";
        }
      });
  },
};
