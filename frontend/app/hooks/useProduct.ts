// productStore.ts
import { create } from "zustand";
import { Product } from "../types";

type Store = {
  products: Product[];

  // replace full product list (used for hydration)
  setProducts: (p: Product[]) => void;

  // decrease stock after add-to-cart or purchase
  decreaseStock: (id: string, qty: number) => void;

  // update a single product (from hydration or API refresh)
  updateProduct: (product: Product) => void;
};

export const useProductStore = create<Store>((set) => ({
  products: [],

  /**
   * Hydrate or replace the entire product list
   * Used in:
   * - Shop page
   * - Featured products
   * - Category pages
   */
  setProducts: (products) =>
    set(() => ({
      products,
    })),

  /**
   * Decrease stock safely without mutating state
   * Optimization:
   * - avoids unnecessary state update if product is not found
   * - ensures stock never goes below 0
   */
  decreaseStock: (id, qty) =>
    set((state) => {
      let changed = false;

      const updatedProducts = state.products.map((p) => {
        if (p.documentId === id) {
          changed = true;

          return {
            ...p,
            stock: Math.max(0, p.stock - qty),
          };
        }

        return p;
      });

      // 🚀 prevent useless re-render if nothing changed
      if (!changed) return state;

      return { products: updatedProducts };
    }),

  /**
   * Update a single product (hydration or refresh)
   * Optimization:
   * - avoids re-render if product not found
   * - replaces only the matching product
   */
  updateProduct: (product: Product) =>
    set((state) => {
      let changed = false;

      const updatedProducts = state.products.map((p) => {
        if (p.documentId === product.documentId) {
          changed = true;
          return product;
        }
        return p;
      });

      // 🚀 skip update if no matching product
      if (!changed) return state;

      return { products: updatedProducts };
    }),
}));
