"use client";

import { useCartStore } from "@/app/lib/zustand/zustand";
import { useProductStore } from "@/app/hooks/useProduct";

export function useRemoveFromCart() {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleRemoveFromCart = (documentId: string) => {
    // 🔍 1. Get cart item safely
    const cartItem = useCartStore
      .getState()
      .cart.find((i) => i.documentId === documentId);

    // 🧠 2. Restore stock BEFORE removing from cart
    if (cartItem) {
      useProductStore
        .getState()
        .restoreStock(cartItem.documentId, cartItem.quantity);
    }

    // 🧹 3. Remove item from cart
    removeFromCart(documentId);
  };

  return { handleRemoveFromCart };
}
