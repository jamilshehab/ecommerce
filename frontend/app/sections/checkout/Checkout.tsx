"use client";

import { useCheckout } from "@/app/hooks/useCheckout";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
export default function CheckoutSection() {
  const {
    cart,
    total,

    form,
    setForm,

    verified,
    setVerified,

    loading,

    handleSubmit,
  } = useCheckout();
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-10">
        {/* LEFT - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <div>
            <h1 className="text-2xl font-bold">Checkout</h1>

            <p className="text-sm text-gray-500 mt-1">
              Cash on Delivery • Guest Checkout
            </p>
          </div>

          {/* INPUT GRID */}
          <div className="space-y-4">
            <input
              placeholder="Full Name *"
              className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-black "
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
              placeholder="Email (optional)"
              className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-black"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <div className="w-full border border-slate-300 rounded-xl p-3 focus-within:border-black">
              <PhoneInput
                international
                defaultCountry="LB"
                placeholder="Phone Number *"
                value={form.phone}
                onChange={(value) => setForm({ ...form, phone: value || "" })}
                className="w-full"
              />
            </div>

            <textarea
              placeholder="Delivery Address *"
              rows={4}
              className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:border-black"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          {/* SIMPLE CAPTCHA */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 bg-gray-50">
            <input
              type="checkbox"
              checked={verified}
              onChange={(e) => setVerified(e.target.checked)}
              className="h-4 w-4"
            />

            <span className="text-sm text-gray-600">
              I confirm I am a human and this order is correct
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full cursor-pointer bg-black text-white py-3 rounded-xl font-medium hover:bg-neutral-900 transition disabled:opacity-50"
          >
            {loading ? "Processing..." : "Place Order (Cash on Delivery)"}
          </button>

          <p className="text-xs text-gray-500 text-center">
            You will pay when your order is delivered
          </p>
        </div>

        {/* RIGHT - ORDER SUMMARY */}
        <div className="bg-white p-8 rounded-2xl shadow-sm h-fit">
          <h2 className="text-xl font-semibold mb-5">Order Summary</h2>

          <div className="space-y-4 max-h-72 overflow-y-auto pr-2">
            {cart.map((item) => (
              <div
                key={item.documentId}
                className="flex justify-between items-center text-sm border-b pb-3"
              >
                <div>
                  <p className="font-medium">{item.title}</p>

                  <p className="text-gray-500">
                    {item.quantity} × ${item.price}
                  </p>
                </div>

                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>

          {/* TOTAL */}
          <div className="mt-6 border-slate-200 border-t pt-4 flex justify-between text-lg font-bold">
            <span>Total</span>

            <span>${total.toFixed(2)}</span>
          </div>

          {/* TRUST BADGES */}
          <div className="mt-6 space-y-2 text-sm text-gray-600 border-slate-200">
            <p>✔ Cash on Delivery available</p>
            <p>✔ Secure & safe checkout</p>
            <p>✔ No online payment required</p>
          </div>
        </div>
      </div>
    </div>
  );
}
