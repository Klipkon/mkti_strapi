export default {
  routes: [
    {
      method: "POST",
      path: "/mail",
      handler: "mail.sendMail",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
