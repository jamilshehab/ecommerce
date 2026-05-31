"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "@/app/types";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
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
          {categories.map((category: any) => (
            <SwiperSlide key={category.id}>
              <Link href={category.slug} className="block h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`overflow-hidden rounded-lg h-full cursor-pointer ${category.backgroundColor}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11]">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8">
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">
                      {category.title}
                    </h2>

                    <p className="text-sm sm:text-base mb-5 opacity-90">
                      {category.subtitle}
                    </p>

                    <span className="font-bold tracking-wide text-sm sm:text-base underline underline-offset-4">
                      {category.linkTitle} ▸
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
