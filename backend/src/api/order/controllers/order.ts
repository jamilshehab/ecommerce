/**
 * order controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::order.order",
  ({ strapi }) => ({
    async create(ctx) {
      return await strapi
        .service("api::order.order")
        .createOrder(ctx.request.body.data);
    },
  }),
);
