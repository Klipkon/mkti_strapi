export default {
  routes: [
    {
      method: "POST",
      path: "/webhook",
      handler: "webhook.sendWebhook",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
