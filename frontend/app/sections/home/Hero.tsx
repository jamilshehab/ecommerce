"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

const slides = [
  {
    image: "/images/slider/backup/slider-4.jpg",
  },
  {
    image: "/images/slider/backup/slider-1.jpg",
  },
  {
    image: "/images/slider/backup/slider-2.jpg",
  },
  {
    image: "/images/slider/backup/slider-3.jpg",
  },
];

export default function HeroSwiper() {
  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              {/* IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={s.image}
                  alt="Hero Image"
                  fill
                  priority
                  className="object-cover scale-110"
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/20 z-[1]" />

              {/* LOGO ONLY ON FIRST SLIDE */}
              {i === 0 && (
                <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-[2] flex justify-center">
                  <Image
                    src="/images/logo/logo.png"
                    alt="SELF Logo"
                    width={420}
                    height={140}
                    className="
                      w-[180px]
                      sm:w-[240px]
                      md:w-[320px]
                      lg:w-[420px]
                      h-auto
                      object-contain
                      brightness-0
                      invert
                      drop-shadow-2xl
                      select-none
                    "
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
