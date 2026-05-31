"use client";

import { fadeUp } from "@/app/lib/animations/global";
import { motion } from "framer-motion";
import Image from "next/image";
import { H2, H3 } from "../../ui/Typography";

const Vision = () => {
  return (
    <section className="px-6 py-24 bg-white">
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
          <H3>
            <span className="text-primary">Our Vision</span>
          </H3>
          <div className="mt-4">
            <H2>
              <span className="text-primary">
                Building a global creative identity
              </span>
            </H2>
          </div>

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
