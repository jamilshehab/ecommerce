"use client";

import { useProductStore } from "@/app/hooks/useProduct";
import { Product } from "@/app/types";

export function useProductStock(product: Product) {
  const stock = useProductStore((state) => {
    const p = state.products.find(
      (item) => item.documentId === product.documentId,
    );

    return p?.stock ?? product.stock ?? 0;
  });

  const isOutOfStock = stock <= 0;
  const isLowStock = stock > 0 && stock <= 5;

  return {
    stock,
    isOutOfStock,
    isLowStock,
    isAvailable: stock > 0,
  };
}
