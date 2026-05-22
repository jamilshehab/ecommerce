/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::product.product', ({ strapi }) => ({
  async find(ctx) {
    // Always populate main_image and category for products
    ctx.query = {
      ...ctx.query,
      populate: ctx.query.populate || ['main_image', 'category'],
    };

    const { data, meta } = await super.find(ctx);

    return { data, meta };
  },

  async findOne(ctx) {
    // Always populate main_image and category for single product
    ctx.query = {
      ...ctx.query,
      populate: ctx.query.populate || ['main_image', 'category'],
    };

    const response = await super.findOne(ctx);

    return response;
  },
}));
