"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/app/lib/animations/global";
import { H2, H3 } from "../../ui/Typography";
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
        <H3>
          <span className="text-black ">Our Story</span>
        </H3>
        <div className="mt-4">
          <H2>
            <span className="text-primary">
              Beauty is not created it is revealed
            </span>
          </H2>
        </div>

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
