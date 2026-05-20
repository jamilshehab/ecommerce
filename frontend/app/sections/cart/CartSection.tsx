"use client";

import Link from "next/link";
import { useCartStore } from "@/app/lib/zustand/zustand";
import { getStrapiImage } from "@/app/lib/services/common";
import CustomImage from "@/app/components/common/CustomImage";
import { useState } from "react";

export default function CartSection() {
  const { cart, decreaseQuantity, increaseQuantity } = useCartStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="flex min-h-screen py-52 flex-col items-center justify-center">
        <h1 className="text-2xl font-semibold">Your cart is empty 🛒</h1>
        <Link
          href="/"
          className="mt-4 rounded-xl bg-black px-6 py-3 text-white"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-6 lg:grid-cols-3 ">
        {/* LEFT: ITEMS */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            const isMaxStock = item.quantity >= item.stock;

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-2xl border  border-slate-200 p-4"
              >
                {/* IMAGE */}
                <CustomImage
                  src={getStrapiImage(item.image || "/placeholder.png")}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-xl object-cover"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">
                    ${item.price} × {item.quantity}
                  </p>

                  {/* STOCK WARNING */}
                  {isMaxStock && (
                    <p className="text-xs text-orange-500 mt-1">
                      Max stock reached ({item.stock})
                    </p>
                  )}
                </div>

                {/* QUANTITY CONTROLS */}
                <div className="flex items-center gap-4">
                  {/* QUANTITY */}
                  <div className="flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="flex h-14 w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100"
                    >
                      -
                    </button>

                    <div className="flex h-14 min-w-[70px] items-center justify-center border-x border-gray-200 text-lg font-semibold text-black">
                      {item.quantity}
                    </div>

                    <button
                      onClick={() => increaseQuantity(item.id)}
                      disabled={item.quantity >= item.stock}
                      className="flex h-14 w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="rounded-2xl border  border-slate-200 p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="border-t    border-slate-200 my-4" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 block text-center cursor-pointer rounded-xl bg-black py-3 text-white"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/"
            className="mt-3 block text-center cursor-pointer text-sm text-gray-500"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
