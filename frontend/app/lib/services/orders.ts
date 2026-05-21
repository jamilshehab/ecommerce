import { fetchAPI } from "../API";

export type StrapiResponse<T> = {
  data: {
    id: number;
    attributes: T;
  };
  meta?: any;
};

export async function createOrder(orderData: any) {
  return fetchAPI<StrapiResponse<any>>("/api/orders", {
    method: "POST",
    body: JSON.stringify({
      data: orderData,
    }),
  });
}
