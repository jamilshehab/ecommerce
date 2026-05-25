"use client";

import { fadeUp } from "@/app/lib/animations/global";
import { motion } from "framer-motion";
import Image from "next/image";

const Vision = () => {
  return (
    <section className="px-6 py-24 bg-gray-50/40">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* IMAGE FIRST ON DESKTOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative h-[420px] rounded-2xl overflow-hidden md:order-1"
        >
          <Image
            src="/images/about/2.jpg"
            alt="Vision"
            width={600}
            height={400}
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="md:order-2"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
            Vision
          </p>
          <h2 className="mt-3 text-3xl font-light text-slate-700">
            Building a global creative identity
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed">
            To become a leading regional brand recognized globally for
            creativity, quality, and cultural impact rooted in authenticity and
            modern design language.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
