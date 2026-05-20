"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import { Text, Title } from "@/app/components/ui/Typography";
import { Button } from "@/app/components/ui/Button";

const slides = [
  {
    title: "Radiance Ritual",
    desc: "Luxury skincare redefined",
    image: "/images/slider/1.jpg",
  },
  {
    title: "Pure Glow",
    desc: "Reveal your natural beauty",
    image: "/images/slider/2.jpg",
  },
  {
    title: "Silk Skin",
    desc: "Soft. Smooth. Powerful.",
    image: "/images/slider/3.jpg",
  },
];

export default function HeroSwiper() {
  return (
    <div className="h-screen w-full">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 4500 }}
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full overflow-hidden">
              {/* IMAGE */}
              <div className="absolute inset-0 scale-110 animate-slowZoom">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/40" />

              {/* CONTENT */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
                <Title>
                  <span className="text-white">{s.title}</span>
                </Title>

                <Text>
                  <span className="text-slate-50 mt-4 block">{s.desc}</span>
                </Text>

                <div className="mt-8">
                  <Button variant="primary">Discover Ritual</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
