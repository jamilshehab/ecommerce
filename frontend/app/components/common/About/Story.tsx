"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations/global";
const Story = () => {
  return (
    <section className="px-6 py-10 bg-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
          Story
        </p>

        <h2 className="mt-3 text-3xl text-slate-700 font-light">
          Where it started
        </h2>

        <p className="mt-6 text-gray-600 leading-relaxed">
          Founded with a vision in Iraq and expanding to Lebanon, SELF
          represents ambition, growth, and identity. It is not just a brand — it
          is a perspective on modern culture.
        </p>
      </motion.div>
    </section>
  );
};

export default Story;
