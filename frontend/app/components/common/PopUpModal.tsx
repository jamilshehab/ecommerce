"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SubscribePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 1200);
  }, []);

  const closeModal = () => {
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Soft luxury blur background */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative w-[92%] max-w-4xl bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">
        {/* Image Side */}
        <div className="hidden md:block relative">
          <Image
            src="/images/subscription/subscribe.jpg"
            height={500}
            width={500}
            alt="skincare"
            className="h-full w-full object-cover"
          />

          {/* soft overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 relative">
          {/* close */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 cursor-pointer text-gray-500 hover:text-black transition"
          >
            ✕
          </button>

          {/* brand label */}
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Skincare Rituals
          </p>

          {/* headline */}
          <h2 className="text-3xl md:text-4xl font-light mt-3 leading-tight">
            Elevate your skincare ritual
          </h2>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Join our exclusive community and receive curated skincare insights,
            early access to drops, and private offers crafted for radiant skin.
          </p>

          {/* form */}
          <form className="mt-8 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="border border-gray-200 bg-white/70 p-4 rounded-xl outline-none focus:ring-1 focus:ring-black transition"
            />

            <button
              type="submit"
              className="bg-black cursor-pointer text-white py-4 rounded-xl hover:opacity-90 transition"
            >
              Join the Ritual
            </button>
          </form>

          {/* footer note */}
          <p className="text-xs text-gray-400 mt-5">
            No spam. Only skincare refinement.
          </p>
        </div>
      </div>
    </div>
  );
}
