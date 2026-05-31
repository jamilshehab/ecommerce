"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";

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
        {/* SLIDE 1 */}

        <SwiperSlide>
          <Slide image="/images/subscribe.jpeg" />
        </SwiperSlide>
        {/* SLIDE 2 (WITH LOGO) */}
        <SwiperSlide>
          <Slide image="/images/slider-images/slider-1.jpg" showLogo />
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <Slide image="/images/slider-images/slider-2.jpg" />
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <Slide image="/images/slider-images/slider-3.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

/* Reusable Slide Component */
function Slide({
  image,
  showLogo = false,
}: {
  image: string;
  showLogo?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* IMAGE */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Hero Image"
          fill
          priority
          className="object-cover scale-110"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      {/* LOGO (ONLY ON SLIDE 2) */}
      {showLogo && (
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

      {/* CONTENT AREA */}
      <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10" />
    </div>
  );
}
