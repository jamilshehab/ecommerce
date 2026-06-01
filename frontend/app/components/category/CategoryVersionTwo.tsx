"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";
import { motion } from "framer-motion";
import { Category } from "@/app/types";
import { getStrapiImage } from "@/app/lib/services/common";
import CustomImage from "../common/CustomImage";

export default function CategoryVersionTwo({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <section className="bg-white">
      <div className="w-full px-3">
        <Swiper
          spaceBetween={16}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {categories.map((category: any) => (
            <SwiperSlide key={category.id}>
              <Link href={`/shop/${category.slug}`} className="block h-full">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className={`group overflow-hidden rounded-lg h-full cursor-pointer ${category.backgroundColor}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <CustomImage
                      src={
                        category.image?.url
                          ? getStrapiImage(category.image.url)
                          : "/images/fallback.jpg"
                      }
                      alt={category.name}
                      width={category.image?.width || 500}
                      height={category.image?.height || 500}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 lg:p-8 bg-black">
                    <h2 className="text-xl text-white sm:text-2xl font-bold mb-2">
                      {category.name}
                    </h2>

                    <p className="text-sm text-white sm:text-base mb-5 opacity-90">
                      {category.subtitle}
                    </p>

                    <span className="font-bold text-white tracking-wide text-sm sm:text-base underline underline-offset-4">
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
