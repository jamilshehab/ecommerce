import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: number;
  productId?: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  stock: number;
};

type CartStore = {
  cart: CartItem[];
  isOpen: boolean;

  addToCart: (product: CartItem) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
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
          const existing = state.cart.find((item) => item.id === product.id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: Math.min(
                        item.quantity + product.quantity,
                        item.stock,
                      ),
                    }
                  : item,
              ),
              isOpen: true,
            };
          }

          return {
            cart: [...state.cart, product],
            isOpen: true,
          };
        }),

      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === id
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + 1, item.stock),
                }
              : item,
          ),
        })),

      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
            )
            .filter((item) => item.quantity > 0),
        })),
    }),
    {
      name: "cart-storage", // 👈 localStorage key
    },
  ),
);
