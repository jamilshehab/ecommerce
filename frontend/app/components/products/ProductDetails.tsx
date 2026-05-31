"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck } from "lucide-react";

import { Product } from "@/app/types";
import { getStrapiImage } from "@/app/lib/services/common";
import CustomImage from "../common/CustomImage";
import { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useAddToCart } from "@/app/hooks/addToCart";
import { useProductStock } from "@/app/hooks/useProductStock";
import { useHydrateProduct } from "@/app/hooks/useHydrateProduct"; // ✅ ADD THIS
import { H2 } from "../ui/Typography";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [mainImage, setMainImage] = useState(product.main_image);
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useAddToCart(product);
  const { stock, isOutOfStock, isLowStock } = useProductStock(product);

  // ✅ HYDRATE PRODUCT INTO ZUSTAND
  useHydrateProduct(product);

  // ✅ SAFE increase (prevents exceeding stock)
  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev >= stock) return prev;
      return prev + 1;
    });
  };

  // ✅ SAFE decrease (never below 1)
  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  // optional safety flag
  const canAdd = !isOutOfStock && quantity > 0;

  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-4 md:grid-cols-2 lg:px-8">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="group relative overflow-hidden rounded-[32px] bg-[#f7f7f7]">
            <CustomImage
              src={getStrapiImage(mainImage?.url || "/placeholder.png")}
              alt={product.title}
              width={mainImage?.width || 1000}
              height={mainImage?.height || 1000}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />

            {isOutOfStock ? (
              <div className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs text-white">
                Out of Stock
              </div>
            ) : isLowStock ? (
              <div className="absolute top-3 left-3 rounded-full bg-orange-500 px-3 py-1 text-xs text-white">
                Only {stock} left
              </div>
            ) : (
              <div className="absolute top-3 left-3 rounded-full bg-green-500 px-3 py-1 text-xs text-white">
                In Stock
              </div>
            )}
          </div>

          {/* GALLERY */}
          {product.images && product.images.length > 0 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setMainImage(image)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    mainImage?.id === image.id
                      ? "border-black"
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <CustomImage
                    src={getStrapiImage(image.url)}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400">
            {product.category?.title}
          </span>

          <H2>
            <span className="text-primary">{product.title}</span>
          </H2>

          <div className="mt-8 flex items-end gap-4">
            <span className="text-4xl font-bold text-black">
              ${product.price}
            </span>
          </div>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-600">
            {product.description ||
              "A luxurious skincare essential crafted with premium ingredients for daily hydration and radiant skin."}
          </p>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-5">
            {/* QUANTITY */}
            <div className="flex items-center gap-4">
              <div className="flex items-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-14 w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100"
                >
                  -
                </button>

                <div className="flex h-14 min-w-[70px] items-center justify-center border-x border-gray-200 text-lg font-semibold text-black">
                  {quantity}
                </div>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= stock}
                  className="flex h-14 w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <button
              disabled={!canAdd}
              onClick={(e) => handleAddToCart(e, quantity)}
              className="flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.01] hover:bg-neutral-900 disabled:cursor-not-allowed disabled:bg-gray-300"
            >
              <FaShoppingBag size={18} />
              {isOutOfStock ? "Out Of Stock" : `Add ${quantity} To Cart`}
            </button>

            {!isOutOfStock && (
              <p className="text-sm text-gray-500">
                {stock} products available in stock
              </p>
            )}
          </div>

          {/* FEATURES */}
          <div className="mt-12 space-y-5 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-4">
              <Truck className="text-gray-700" size={22} />
              <div>
                <p className="font-medium text-black">
                  Free Worldwide Shipping
                </p>
                <p className="text-sm text-gray-500">On all orders over $100</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ShieldCheck className="text-gray-700" size={22} />
              <div>
                <p className="font-medium text-black">Secure Checkout</p>
                <p className="text-sm text-gray-500">
                  SSL encrypted payment protection
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductDetails;
