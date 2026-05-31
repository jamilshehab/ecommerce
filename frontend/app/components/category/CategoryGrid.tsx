"use client";
import Link from "next/link";
import CustomImage from "../common/CustomImage";
import { getStrapiImage } from "@/app/lib/services/common";
import { Category } from "@/app/types";
import { motion } from "framer-motion";
export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  const slides = [
    {
      title: "Hydrating Mists and Oils",
      subtitle: "Have a great hair summer.",
      button: "SHOP NOW",
      image: "/images/card-1.jpg",
      bg: "bg-[#d9e2f3]",
    },
    {
      title: "Makeup-Friendly Sunscreens",
      subtitle: "Made to layer. Easy to reapply.",
      button: "FIND YOUR MATCH",
      image: "/images/card-2.jpg",
      bg: "bg-black text-white",
    },
    {
      title: "Just In from Hourglass",
      subtitle: "Get the perfect blurred lip with this ultra-silky formula.",
      button: "SHOP NOW",
      image: "/images/card-3.jpg",
      bg: "bg-[#e9e3dc]",
    },
  ];
  return (
    <section className="max-w-6xl mx-auto py-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl font-semibold text-black tracking-tight">
          Shop by Category
        </h2>
        <p className="text-gray-500 mt-4 text-lg"></p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {categories.map((cat: any) => (
          <Link
            key={cat.id}
            href={`/shop/${cat.slug}`}
            className="group relative rounded-2xl overflow-hidden h-40 md:h-52 block"
          >
            {/* Image */}
            <CustomImage
              src={getStrapiImage(cat.image.url)}
              alt={cat.name}
              width={cat.image.width || 500}
              height={cat.image.height || 500}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="flex items-center justify-between">
              <div className="absolute inset-0 flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{cat.name}</h3>
              </div>
              <div className="absolute inset-0 flex items-end justify-end p-4">
                <p className="text-white/80 text-sm">
                  {cat.products?.length || 0} Products
                </p>
              </div>
            </div>
            {/* Text */}
          </Link>
        ))}
      </div>
    </section>
  );
}
