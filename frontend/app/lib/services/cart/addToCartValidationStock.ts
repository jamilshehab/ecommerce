import { useCartStore } from "@/app/lib/zustand/zustand";
import { validateStock } from "./validationStock";

type Product = {
  documentId: string;
  title: string;
  price: number;
  image: string;
};

export async function addToCartWithValidation(
  product: Product,
  quantity: number = 1,
) {
  const result = await validateStock(product.documentId, quantity);

  if (!result.valid) {
    return {
      success: false as const,
      message: result.message,
    };
  }

  // ✅ NO ZUSTAND HERE
  return {
    success: true as const,
  };
}
