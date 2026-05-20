"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useCartStore } from "@/app/lib/zustand/zustand";
import { getStrapiImage } from "@/app/lib/services/common";

import CustomImage from "../common/CustomImage";

const CartDrawer = () => {
  const pathname = usePathname();

  const { cart, isOpen, closeCart } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Close cart on route change
  useEffect(() => {
    closeCart();
  }, [pathname, closeCart]);

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      {/* overlay */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* drawer */}
      <div
        className={`absolute right-0 top-0 h-full w-[380px] bg-white shadow-xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* header */}
        <div className="flex items-center justify-between border-b p-4">
          <h2 className="text-lg font-semibold">Your Cart</h2>

          <button className="cursor-pointer" onClick={closeCart}>
            ✕
          </button>
        </div>

        {/* items */}
        <div className="p-4 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-3">
                <CustomImage
                  src={getStrapiImage(item.image || "/placeholder.png")}
                  alt={item.title}
                  width={62}
                  height={72}
                  className="rounded-3xl object-cover"
                />

                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>

                  <p className="text-sm text-gray-500">
                    {item.quantity} × ${item.price}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* footer */}
        <div className="border-t p-4 space-y-3">
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
            className="block text-center bg-gray-200 py-3 rounded-xl"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
