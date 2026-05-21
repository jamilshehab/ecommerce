"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function CTA() {
  return (
    <motion.section
      className="py-40 px-6 md:px-20 bg-black text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Headline */}
        <motion.h2
          variants={item}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Discover SELF
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={item}
          className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          Beauty is not added. It is revealed. Begin your ritual with formulas
          designed to restore your natural essence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 pt-4"
        >
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/begin-ritual"
              className="bg-white text-black hover:bg-gray-200 py-2 px-6 rounded-md transition inline-block"
            >
              Begin Ritual
            </Link>
          </motion.div> */}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/shop"
              className="bg-transparent text-white hover:bg-white/10 py-2 px-6 rounded-full transition inline-block"
            >
              Explore Collection
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
