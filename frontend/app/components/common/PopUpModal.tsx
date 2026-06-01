"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createSubscribe } from "@/app/lib/services/subscribe";
import { toast } from "react-toastify";
import PhoneNumberInput from "./PhoneInput";
import { H2, H3 } from "../ui/Typography";

export default function SubscribePopup() {
  const [open, setOpen] = useState(false);
  const [phone_number, setPhoneNumber] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone_number) return toast.error("Phone number is required");

    try {
      setLoading(true);
      await createSubscribe(phone_number);

      toast.success("Subscribed successfully 🎉");
      setPhoneNumber("");
      setOpen(false);
    } catch (err) {
      console.error("Subscribe Error:", err);
      toast.error("Enter The Required Field");
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
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute cursor-pointer top-4 right-4 z-10 text-slate-600 hover:text-black transition text-lg"
        >
          ✕
        </button>

        {/* Image Side */}
        <div className="hidden md:block relative">
          <Image
            src="/images/subscribe.jpeg"
            fill
            alt="skincare"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          {/* Header */}
          <H3>
            <span className="text-gray-400">Skincare Rituals</span>
          </H3>

          <div className="mt-4">
            <H2>
              <span className="primary"> Elevate your skincare ritual</span>
            </H2>
          </div>

          <p className="text-sm text-gray-600 mt-3">
            Join our exclusive community and receive curated skincare insights,
            early access to drops, and private offers crafted for radiant skin.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <PhoneNumberInput
              value={phone_number}
              onChange={(val) => setPhoneNumber(val ?? "")}
              country="LB"
              international
              placeholder="Phone Number *"
              className="w-full px-4 py-4 rounded-xl border border-gray-200 bg-white/70 text-black placeholder:text-gray-400 outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-black cursor-pointer text-white py-4 rounded-xl hover:opacity-90 transition disabled:opacity-50"
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
