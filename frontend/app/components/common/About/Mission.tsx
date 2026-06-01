"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations/global";
import { H2, H3 } from "../../ui/Typography";
const Mission = () => {
  return (
    <div>
      <section className="px-6 py-10 bg-secondary">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <H3>
              <span className="text-primary">Our Mission</span>
            </H3>
            <div className="mt-4">
              <H2>
                <span className="text-primary">
                  Designing identity through culture
                </span>
              </H2>
            </div>
            <p className="mt-6 text-gray-600 leading-relaxed">
              To create a modern lifestyle brand that empowers SELF-expression
              through culture, fashion, and identity. Every piece we build
              reflects intention, clarity, and personal meaning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
