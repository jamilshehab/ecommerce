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
          <Image
            src="/images/subscribe.jpeg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />
        </SwiperSlide>
        {/* SLIDE 2 (WITH LOGO) */}
        <SwiperSlide>
          <Image
            src="/images/slider-images/slider-1.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />
          <div className="absolute inset-0 bg-black/20 z-[1]" />

          {/* LOGO (ONLY ON SLIDE 2) */}

          <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-[2] flex justify-center">
            <Image
              src="/images/logo/logo.png"
              alt="  SELF Logo"
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

            {/* CONTENT AREA */}
            <div className="relative z-10 h-full flex items-end px-6 md:px-12 pb-10" />
          </div>
        </SwiperSlide>

        {/* SLIDE 3 */}
        <SwiperSlide>
          <Image
            src="/images/slider-images/slider-2.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />
        </SwiperSlide>

        {/* SLIDE 4 */}
        <SwiperSlide>
          <Image
            src="/images/slider-images/slider-3.jpg"
            alt="Hero Image"
            fill
            priority
            className="object-cover scale-110"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
