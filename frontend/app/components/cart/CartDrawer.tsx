"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { X } from "lucide-react";

import { useCartStore } from "@/app/lib/zustand/zustand";
import { useProductStore } from "@/app/hooks/useProduct";
import { getStrapiImage } from "@/app/lib/services/common";
import CustomImage from "../common/CustomImage";
import { useRemoveFromCart } from "@/app/hooks/removeFromCart";

const CartDrawer = () => {
  const pathname = usePathname();

  const { cart, isOpen, closeCart } = useCartStore();
  const { handleRemoveFromCart } = useRemoveFromCart();
  // Product store (source of truth for stock)
  const products = useProductStore((state) => state.products);

  const total = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart],
  );

  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "visible" : "invisible"}`}>
      {/* overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-[420px] bg-white flex flex-col shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b px-5 py-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={closeCart}>
            <X size={18} />
          </button>
        </div>

        {/* items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => {
              // get product from store (ONLY for stock)
              const product = products.find(
                (p) => p.documentId === item.documentId,
              );

              return (
                <div key={item.documentId} className="flex items-center gap-4">
                  {/* image */}
                  <CustomImage
                    src={getStrapiImage(item.image || "/placeholder.png")}
                    alt={item.title}
                    width={90}
                    height={110}
                    className="rounded-2xl object-cover"
                  />

                  {/* info */}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500">${item.price}</p>
                  </div>

                  {/* remove */}
                  <button onClick={() => handleRemoveFromCart(item.documentId)}>
                    <X size={18} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* footer */}
        <div className="border-t px-5 py-4 space-y-3">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href="/cart"
            className="block text-center bg-black text-white py-3 rounded-xl"
          >
            View Cart
          </Link>

          <Link
            href="/checkout"
            className="block text-center bg-gray-100 py-3 rounded-xl"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
