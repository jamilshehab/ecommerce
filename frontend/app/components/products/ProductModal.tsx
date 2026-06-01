import {
  imagePop,
  modalBackdrop,
  modalCard,
  rain,
} from "@/app/lib/animations/modal";
import { motion } from "framer-motion";
import { useState } from "react";
import { ProductModalProps } from "@/app/types";
import CustomImage from "../common/CustomImage";
import { getStrapiImage } from "@/app/lib/services/common";
import { FaShoppingBag } from "react-icons/fa";
import { useAddToCart } from "@/app/hooks/addToCart";
import { useProductStock } from "@/app/hooks/useProductStock";
import { useHydrateProduct } from "@/app/hooks/useHydrateProduct";

const ProductModal = ({ selected, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const { handleAddToCart } = useAddToCart(selected);
  const { stock, isOutOfStock, isLowStock } = useProductStock(selected);

  useHydrateProduct(selected);

  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev >= stock) return prev;
      return prev + 1;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
      variants={modalBackdrop}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {/* 🌧️   SELF RAIN BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[60]">
        {rain.map((_, i) => {
          const letters = ["  SELF", "  SELF", "  SELF", "  SELF"];
          const letter = letters[i % letters.length];
          const left = (i / rain.length) * 100;

          return (
            <motion.div
              key={i}
              className="absolute text-black/60 font-semibold text-sm"
              style={{ left: `${left}%` }}
              initial={{ y: -40, opacity: 0, rotate: 0 }}
              animate={{
                y: 900,
                opacity: [0, 1, 0],
                rotate: [0, 20, -20],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.div>
          );
        })}
      </div>

      {/* 🧴 MODAL CARD */}
      <motion.div
        className="
          bg-white/90 backdrop-blur-xl rounded-3xl
          w-[95%] sm:w-full sm:max-w-4xl
          max-h-[90vh]
          overflow-hidden
          shadow-[0_20px_80px_rgba(0,0,0,0.25)]
        "
        variants={modalCard}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE */}
          <motion.div
            className="relative h-[280px] sm:h-[360px] md:h-full"
            variants={imagePop}
            initial="hidden"
            animate="show"
          >
            <CustomImage
              src={getStrapiImage(selected.main_image?.url)}
              alt={selected.title}
              width={selected.main_image?.width || 500}
              height={selected.main_image?.height || 500}
              className="object-cover"
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
          </motion.div>

          {/* CONTENT */}
          <div className="p-6 sm:p-8 flex flex-col justify-center relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={onClose}
              className="absolute top-4 right-6 text-gray-500 hover:text-black cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-3xl font-semibold text-capitalize">
              {selected.title}
            </h3>

            <p className="text-gray-500 mt-2">${selected.price}</p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              {selected.description}
            </p>

            {/* QUANTITY */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-2">Quantity</p>

              <div className="flex items-center border rounded-full w-fit overflow-hidden">
                <button
                  onClick={decreaseQuantity}
                  className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100"
                >
                  -
                </button>

                <div className="flex h-10 sm:h-14 min-w-[70px] items-center justify-center border-x border-gray-200 text-lg font-semibold text-black">
                  {quantity}
                </div>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= stock}
                  className="flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center text-xl text-gray-600 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <div className="mt-8">
              <button
                disabled={isOutOfStock}
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-3 rounded-2xl bg-black px-8 py-4 text-sm font-medium text-white transition hover:scale-[1.01] hover:bg-neutral-900 disabled:cursor-not-allowed disabled:bg-gray-300"
              >
                <FaShoppingBag size={18} />
                {isOutOfStock ? "Out Of Stock" : `Add ${quantity} To Cart`}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProductModal;
