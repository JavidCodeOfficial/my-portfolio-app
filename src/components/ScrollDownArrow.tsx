"use client";

import Lottie from "lottie-react";
import arrowAnimation from "../assets/lottie/Scroll Down Arrow.json";
import { motion } from "motion/react";

function ScrollDownArrow() {
  return (
    <div className="flex items-center justify-center m-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-12 h-12 opacity-80 shrink-0"
      >
        <Lottie animationData={arrowAnimation} />
      </motion.div>
    </div>
  );
}

export default ScrollDownArrow;
