"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createSubscribe } from "@/app/lib/services/subscribe";

export default function SubscribePopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return alert("Email is required");

    try {
      setLoading(true);

      await createSubscribe(email);

      alert("Subscribed successfully 🎉");

      setEmail("");
      setOpen(false);
    } catch (err) {
      console.error("Subscribe Error:", err);
      alert("Subscription failed");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
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

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 relative">
          {/* Close button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 text-gray-500 hover:text-black transition"
          >
            ✕
          </button>

          {/* Text */}
          <p className="text-xs tracking-[0.3em] uppercase text-gray-500">
            Skincare Rituals
          </p>

          <h2 className="text-3xl md:text-4xl font-light mt-3 leading-tight">
            Elevate your skincare ritual
          </h2>

          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Join our exclusive community and receive curated skincare insights,
            early access to drops, and private offers crafted for radiant skin.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-200 bg-white/70 p-4 rounded-xl outline-none focus:ring-1 focus:ring-black transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Joining..." : "Join the Ritual"}
            </button>
          </form>

          {/* Footer */}
          <p className="text-xs text-gray-400 mt-5">
            No spam. Only skincare refinement.
          </p>
        </div>
      </div>
    </div>
  );
}
