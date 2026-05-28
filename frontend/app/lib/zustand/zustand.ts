import { useProductStore } from "@/app/hooks/useProduct";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  documentId: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

type CartStore = {
  cart: CartItem[];
  isOpen: boolean;

  addToCart: (product: CartItem) => void;
  increaseQuantity: (documentId: string) => void;
  decreaseQuantity: (documentId: string) => void;

  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;

  // ✅ NEW ACTION (you were missing this)
  removeFromCart: (documentId: string) => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      isOpen: false,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      clearCart: () => set({ cart: [] }),

      addToCart: (product) =>
        set((state) => {
          const existing = state.cart.find(
            (item) => item.documentId === product.documentId,
          );

          if (existing) {
            return {
              isOpen: true,
              cart: state.cart.map((item) =>
                item.documentId === product.documentId
                  ? {
                      ...item,
                      quantity: item.quantity + product.quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            isOpen: true,
            cart: [...state.cart, product],
          };
        }),

      increaseQuantity: (documentId) =>
        set((state) => ({
          cart: state.cart.map((item) => {
            const product = useProductStore
              .getState()
              .products.find((p) => p.documentId === documentId);

            const stock = product?.stock ?? 0;

            if (item.quantity >= stock) return item;

            return item.documentId === documentId
              ? { ...item, quantity: item.quantity + 1 }
              : item;
          }),
        })),

      decreaseQuantity: (documentId) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.documentId === documentId
                ? { ...item, quantity: item.quantity - 1 }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),

      // ================================
      // 🧨 REMOVE ITEM FROM CART
      // ================================
      removeFromCart: (documentId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.documentId !== documentId),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
);
