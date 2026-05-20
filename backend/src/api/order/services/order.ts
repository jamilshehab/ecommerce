import { factories } from "@strapi/strapi";

type Product = {
  id: number;
  stock: number;
  title: string;
};

export default factories.createCoreService(
  "api::order.order",
  ({ strapi }) => ({
    async createOrder(data: any) {
      const orderItems = data?.orderItem;

      if (!Array.isArray(orderItems) || !orderItems.length) {
        throw new Error("No order items found");
      }

      // =========================
      // FETCH PRODUCTS
      // =========================
      const productIds = orderItems.map((i: any) => Number(i.productId));

      const products = (await strapi.db.query("api::product.product").findMany({
        where: {
          id: {
            $in: productIds,
          },
        },
        select: ["id", "stock", "title"],
      })) as Product[];

      const productMap = new Map(products.map((p) => [p.id, p]));

      // =========================
      // VALIDATE STOCK
      // =========================
      for (const item of orderItems) {
        const product = productMap.get(Number(item.productId));

        if (!product) {
          throw new Error("Product not found");
        }

        if (product.stock < item.quantity) {
          throw new Error(`Not enough stock for ${product.title}`);
        }
      }

      // =========================
      // CREATE ORDER
      // =========================
      const order = await strapi.documents("api::order.order").create({
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,

          payment_status: "pending",
          payment_method: "cod",

          total: Number(data.total),

          orderItem: orderItems,
        } as any,
      });

      // =========================
      // UPDATE STOCK
      // =========================
      for (const item of orderItems) {
        const product = productMap.get(Number(item.productId));

        await strapi.db.query("api::product.product").update({
          where: {
            id: product!.id,
          },
          data: {
            stock: product!.stock - item.quantity,
          },
        });
      }

      return order;
    },
  }),
);
