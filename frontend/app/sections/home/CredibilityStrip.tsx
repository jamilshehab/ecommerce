"use client";

import { motion } from "framer-motion";

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

  return (
    <section className="py-40 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="  mb-20">
          <h2 className="text-4xl md:text-6xl text-center text-slate-900  font-extrabold leading-tight">
            What makes it
            <br /> exceptional
          </h2>
        </div>

        {/* Editorial Layout */}
        <div className="grid md:grid-cols-3 gap-16">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              {/* Big number (luxury touch) */}
              <span className="text-6xl font-extrabold text-gray-200 group-hover:text-gray-300 transition">
                0{i + 1}
              </span>

              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-slate-700">
                  {item.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
