"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const testimonials = [
  {
    quote: "My skin has never felt this refined.",
    name: "Sarah K.",
  },
  {
    quote: "A ritual I look forward to every day.",
    name: "Maya L.",
  },
  {
    quote: "Pure luxury in every drop.",
    name: "Nadine R.",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-40 px-6 md:px-20 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-16">
          Loved by Many
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          loop
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
          className="mb-12"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="space-y-6">
                {/* Quote */}
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                  “{t.quote}”
                </p>

                {/* Name */}
                <span className="text-sm text-gray-500 tracking-wide">
                  {t.name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM PAGINATION */}
        <div className="flex justify-center items-center gap-6 text-sm tracking-widest">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`transition ${
                active === i
                  ? "text-black font-medium"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              0{i + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
