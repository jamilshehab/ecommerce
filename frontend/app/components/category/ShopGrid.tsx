"use client";

import { container } from "@/app/lib/animations/global";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { Product } from "@/app/types";
import ProductModal from "../products/ProductModal";
import ProductCard from "../products/ProductCard";
const ShopGrid = ({ products }: { products: Product[] }) => {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <section className="">
      <div className="container mx-auto max-w-6xl  ">
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
    </section>
  );
};
export default ShopGrid;
