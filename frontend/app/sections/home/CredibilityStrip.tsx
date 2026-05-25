"use client";

import { motion, Variants } from "framer-motion";

export default function CredibilityStrip() {
  const items = [
    {
      title: "Hyaluronic Acid",
      desc: "Deep hydration that restores skin elasticity and softness.",
    },
    {
      title: "Vitamin C Complex",
      desc: "Brightens skin tone and enhances natural radiance.",
    },
    {
      title: "Botanical Extracts",
      desc: "Naturally derived ingredients to nourish and protect.",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
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

  return (
    <section className="py-40 px-6 md:px-20 bg-white">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl text-center text-slate-900 font-extrabold leading-tight">
            What makes it
            <br /> exceptional
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid md:grid-cols-3 gap-16">
          {items.map((itemData, i) => (
            <motion.div key={i} variants={item} className="group">
              {/* Big number */}
              <span className="text-6xl font-extrabold text-gray-200 group-hover:text-gray-300 transition">
                0{i + 1}
              </span>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-slate-700">
                  {itemData.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {itemData.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
