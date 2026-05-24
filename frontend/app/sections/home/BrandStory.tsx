"use client";

import { Button } from "@/app/components/ui/Button";
import { Subtitle, Text, Title } from "@/app/components/ui/Typography";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function BrandStory() {
  return (
    <motion.section
      className="py-32 px-6 md:px-20 bg-[var(--color-bg)]"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        {/* Small label */}
        <motion.div variants={item}>
          <Subtitle>
            <span className="text-slate-600 uppercase tracking-widest text-sm">
              Our Philosophy
            </span>
          </Subtitle>
        </motion.div>

        {/* Main title */}
        <motion.div variants={item}>
          <Title>
            <span className="text-primary">
              Beauty is not created it is revealed
            </span>
          </Title>
        </motion.div>

        {/* Body text */}
        <motion.div variants={item}>
          <Text>
            <span className="!text-slate-900 block max-w-2xl mx-auto">
              We believe skincare should feel like a ritual, not a routine.
              Every formula is crafted with precision, inspired by nature, and
              refined with science to enhance your natural glow.
            </span>
          </Text>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="pt-4 inline-block"
        >
          <Link
            href="/about"
            className="border px-5 py-3 rounded-4xl border-black text-black hover:bg-[var(--color-accent-2)]"
          >
            Discover Our Story
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
