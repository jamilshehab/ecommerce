import { Variants } from "framer-motion";

export const rain = Array.from({ length: 18 });
// 🌧️ SELF rainy QUICK VIEW ANIMATION
export const modalBackdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

export const modalCard: Variants = {
  hidden: {
    scale: 0.85,
    opacity: 0,
    y: 60,
    filter: "blur(12px)",
  },
  show: {
    scale: 1,
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 140,
      damping: 18,
    },
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
    transition: { duration: 0.25 },
  },
};

export const imagePop: Variants = {
  hidden: { scale: 1.15, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
