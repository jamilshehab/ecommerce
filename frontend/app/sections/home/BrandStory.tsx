"use client";

import { Text, H3, H2 } from "@/app/components/ui/Typography";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BrandStory() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        {/* Small label */}
        <motion.div variants={item}>
          <H3>
            <span className="text-black   ">Our Philosophy</span>
          </H3>
        </motion.div>

        {/* Main title */}
        <motion.div variants={item}>
          <H2>
            <span className="text-primary -mt-2">
              Beauty is not created it is revealed
            </span>
          </H2>
        </motion.div>

        {/* Body text */}
        <motion.div variants={item}>
          <p>
            We believe skincare should feel like a ritual, not a routine. Every
            formula is crafted with precision, inspired by nature, and refined
            with science to enhance your natural glow.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.99 }}
          className="pt-4 inline-block"
        >
          <Link
            href="/about"
            className="border px-5 py-3 rounded-4xl border-black text-black hover:bg-black hover:text-white transition inline-block"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
