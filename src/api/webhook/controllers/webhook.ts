"use strict";

/**
 * A set of functions called "actions" for `webhook`
 */

export default {
  sendWebhook: async (ctx, next) => {
    try {
      const { event } = ctx.request.body;

      const response = await fetch(process.env.GITHUB_WEBHOOK_URL as string, {
        method: "POST",
        headers: {
          Application: "application/vnd.github+json",
          Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_SECRET}`,
        },
        body: JSON.stringify({
          event_type: event,
        }),
      });

      response.ok
        ? console.log("Webhook sent successfully")
        : console.log("Webhook failed to send");
      response.ok
        ? ctx.status(200).send("Webhook sent successfully")
        : ctx.status(500).send("Webhook failed to send");
    } catch (err) {
      ctx.body = err;
    }
  },
};
