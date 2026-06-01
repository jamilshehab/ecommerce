"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { H2 } from "@/app/components/ui/Typography";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 22,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CTA() {
  return (
    <motion.section
      className="cta-section py-20  md:py-40 px-6 md:px-20 bg-black text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Headline */}
        <H2>
          <span className="text-white">Discover SELF</span>
        </H2>

        {/* Subtext */}
        <motion.p
          variants={item}
          className=" !text-white text-sm md:text-base leading-relaxed max-w-xl mx-auto"
        >
          Beauty is not added. It is revealed. Begin your ritual with formulas
          designed to restore your natural essence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4 pt-4"
        >
          {/* Primary CTA (optional future use) */}

          {/* Secondary CTA */}
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.99 }}>
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
