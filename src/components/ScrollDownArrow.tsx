"use client";

import Lottie from "lottie-react";
import arrowAnimation from "../assets/lottie/Scroll Down Arrow.json";

function ScrollDownArrow() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-12 h-12 opacity-80 shrink-0">
        <Lottie animationData={arrowAnimation} />
      </div>
    </div>
  );
}

export default ScrollDownArrow;
