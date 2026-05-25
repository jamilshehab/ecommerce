"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { Product } from "@/app/types";

/* =========================
   Motion Variants (Typed)
========================= */

const header: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const gridContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const gridItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   Component
========================= */

const ProductsGrid = ({ products }: { products: Product[] }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      {/* Header */}
      <div className="container max-w-6xl mx-auto">
        <motion.div
          variants={header}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-semibold tracking-tight">
            Featured Collection
          </h2>
          <p className="text-gray-500 mt-4 text-lg">
            Elevated essentials crafted for modern luxury
          </p>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={gridItem}>
              <ProductCard product={product} onQuickView={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProductModal selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductsGrid;
