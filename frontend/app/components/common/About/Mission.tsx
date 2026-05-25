"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations/global";
const Mission = () => {
  return (
    <div>
      <section className="px-6 py-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.3em] text-gray-400 uppercase">
              Mission
            </p>
            <h2 className="mt-3 text-3xl text-slate-700 font-light">
              Designing identity through culture
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              To create a modern lifestyle brand that empowers self-expression
              through culture, fashion, and identity. Every piece we build
              reflects intention, clarity, and personal meaning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-[420px] rounded-2xl overflow-hidden"
          >
            <Image
              src="/images/about/1.jpg"
              alt="Mission"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
