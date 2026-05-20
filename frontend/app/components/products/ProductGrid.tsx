"use client";

import { container } from "@/app/lib/animations/global";
import ProductCard from "./ProductCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ProductModal from "./ProductModal";
import { Product } from "@/app/types";
const ProductsGrid = ({ products }: { products: Product[] }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
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

      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={setSelected}
            />
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProductModal selected={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
export default ProductsGrid;
