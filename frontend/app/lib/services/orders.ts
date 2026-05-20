import { API_URL } from "../API";

export async function createOrder(orderData: any) {
  try {
    const res = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        data: orderData,
      }),
    });
    if (!res.ok) {
      const errorData = await res.text();
      console.error("Order API Error:", errorData);

      throw new Error("Failed to create order");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
