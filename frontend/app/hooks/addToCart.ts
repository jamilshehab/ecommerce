"use client";

import { useCartStore } from "@/app/lib/zustand/zustand";
import { addToCartWithValidation } from "@/app/lib/services/cart/addToCartValidationStock";
import { useProductStore } from "@/app/hooks/useProduct";
import { toast } from "react-toastify/unstyled";

type Product = {
  documentId: string;
  title: string;
  price: number;
  main_image?: {
    url?: string;
  };
};

export function useAddToCart(product: Product) {
  const addToCart = useCartStore((state) => state.addToCart);
  const openCart = useCartStore((state) => state.openCart);

  const handleAddToCart = async (
    e: React.MouseEvent<HTMLButtonElement>,
    quantity: number = 1,
  ) => {
    e.preventDefault();

    const result = await addToCartWithValidation(
      {
        documentId: product.documentId,
        title: product.title,
        price: product.price,
        image: product.main_image?.url || "",
      },
      quantity,
    );

    if (!result.success) {
      alert(result.message);
      return;
    }

    // ✅ 1. update cart instantly (UI)
    addToCart({
      documentId: product.documentId,
      title: product.title,
      price: product.price,
      image: product.main_image?.url || "",
      quantity,
    });
    toast.success("Added to cart!");
    // ✅ 2. open cart drawer instantly
    openCart();
    useProductStore.getState().decreaseStock(product.documentId, quantity);
  };

  return { handleAddToCart };
}
