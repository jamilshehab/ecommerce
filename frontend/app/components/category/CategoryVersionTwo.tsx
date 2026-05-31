"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CategoryGrid() {
  const slides = [
    {
      title: "Hydrating Mists and Oils",
      subtitle: "Have a great hair summer.",
      button: "SHOP NOW",
      image: "/images/card-1.jpg",
      bg: "bg-[#d9e2f3]",
      slug: "/shop/hydrating-mists",
    },
    {
      title: "Makeup-Friendly Sunscreens",
      subtitle: "Made to layer. Easy to reapply.",
      button: "FIND YOUR MATCH",
      image: "/images/card-2.jpg",
      bg: "bg-black text-white",
      slug: "/shop/sunscreens",
    },
    {
      title: "Just In from Hourglass",
      subtitle: "Get the perfect blurred lip with this ultra-silky formula.",
      button: "SHOP NOW",
      image: "/images/card-3.jpg",
      bg: "bg-[#e9e3dc]",
      slug: "/shop/hourglass",
    },
  ];

  return (
    <section className="   bg-white">
      <div className="w-full px-3">
        <Swiper
          spaceBetween={16}
          breakpoints={{
            0: {
              slidesPerView: 1.1,
            },
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <Link href={slide.slug} className="block h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`overflow-hidden rounded-lg h-full cursor-pointer ${slide.bg}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      {slide.title}
                    </h2>

                    <p className="text-sm sm:text-base mb-5 opacity-90">
                      {slide.subtitle}
                    </p>

                    <span className="font-bold tracking-wide text-sm sm:text-base underline underline-offset-4">
                      {slide.button} ▸
                    </span>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
