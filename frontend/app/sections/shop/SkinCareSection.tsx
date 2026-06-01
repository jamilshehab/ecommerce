"use client";

import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

import { H2 } from "@/app/components/ui/Typography";
import ProductCard from "@/app/components/products/ProductCard";

export default function SkincareSection({ products }: { products: any[] }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-14 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <H2>
              <span className="primary">Drop New Products</span>
            </H2>
          </div>
          <div>
            <Link
              href="/shop/skincare"
              className="border px-5 py-3 rounded-4xl border-black text-black hover:bg-black hover:text-white transition inline-block"
            >
              View all
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        {/* HEADER */}
        <div className="flex items-end justify-between mb-8"></div>

        {/* SWIPER WRAPPER */}
        <div className="relative">
          {/* LEFT ARROW */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 rounded-full
            bg-white/80 backdrop-blur-md
            shadow-lg border border-gray-200
            flex items-center justify-center
            hover:scale-110 hover:bg-white cursor-pointer
            transition"
          >
            <ChevronLeft size={20} />
          </button>

          {/* RIGHT ARROW */}
          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
            w-11 h-11 rounded-full
            bg-white/80 backdrop-blur-md
            shadow-lg border border-gray-200
            flex items-center justify-center cursor-pointer
            hover:scale-110 hover:bg-white
            transition"
          >
            <ChevronRight size={20} />
          </button>

          {/* SWIPER */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {products?.map((item: any) => (
              <SwiperSlide key={item.id}>
                <ProductCard product={item} onQuickView={() => {}} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
