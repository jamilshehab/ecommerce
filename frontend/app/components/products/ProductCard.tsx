"use client";

import { motion } from "framer-motion";

import { item } from "@/app/lib/animations/global";
import { ProductCardProps } from "@/app/types";
import { getStrapiImage } from "@/app/lib/services/common";
import CustomImage from "../common/CustomImage";
import { FaEye, FaShoppingBag } from "react-icons/fa";
import Link from "next/link";
import { useCartStore } from "@/app/lib/zustand/zustand";
import { useState } from "react";

const ProductCard = ({ product, onQuickView }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  const stock = product.stock || 0;

  const isOutOfStock = stock <= 0;
  const isLowStock = stock > 0 && stock <= 5;

  return (
    <motion.div variants={item} className="group relative">
      {/* IMAGE WRAPPER */}
      <Link href={`/shop/${product.category?.slug}/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl isolate">
          <CustomImage
            src={getStrapiImage(product.main_image?.url)}
            alt={product.title}
            width={product.main_image?.width || 500}
            height={product.main_image?.height || 500}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* STOCK BADGE */}
          {isOutOfStock ? (
            <div className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
              Out of Stock
            </div>
          ) : stock ? (
            <div className="absolute top-3 left-3 rounded-full bg-green-500 px-3 py-1 text-xs text-white">
              In Stock
            </div>
          ) : isLowStock ? (
            <div className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs text-white">
              Only {stock} left
            </div>
          ) : null}

          <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />

          {/* ACTIONS (NOW INSIDE IMAGE → FIXED) */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-6 items-center gap-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              className="rounded-full bg-white/90 p-3 text-black shadow-lg backdrop-blur transition hover:scale-110 cursor-pointer"
            >
              <FaEye size={16} />
            </button>

            <button
              disabled={isOutOfStock}
              onClick={(e) => {
                e.preventDefault();
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.main_image?.url || "",
                  stock: stock,
                  quantity: quantity,
                });
              }}
              className="rounded-full bg-white/90 p-3 shadow-lg backdrop-blur transition hover:scale-110 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaShoppingBag size={16} />
            </button>
          </div>
        </div>
      </Link>

      {/* TITLE + PRICE (UNCHANGED STRUCTURE) */}
      <div className="mt-3 px-1">
        <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
          {product.title}
        </h3>

        <p className="mt-1 text-sm text-gray-500">${product.price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
