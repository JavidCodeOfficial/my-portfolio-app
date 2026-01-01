import { MotionProps } from "motion/react";

type FadeUpOptions = {
  y?: number;
  duration?: number;
  delay?: number;
  blur?: number;
  once?: boolean;
};

type FadeXOptions = {
  x?: number;
  duration?: number;
  delay?: number;
  blur?: number;
  once?: boolean;
};

export function fadeUp({
  y = 20,
  duration = 0.6,
  delay = 0,
  blur = 12,
  once = true,
}: FadeUpOptions = {}): MotionProps {
  return {
    initial: {
      opacity: 0,
      y,
      filter: `blur(${blur}px)`,
    },
    whileInView: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
    viewport: { once },
    transition: { duration, delay },
  };
}

export function fadeX({
  x = 20,
  duration = 0.6,
  delay = 0,
  blur = 12,
  once = true,
}: FadeXOptions = {}): MotionProps {
  return {
    initial: {
      opacity: 0,
      x,
      filter: `blur(${blur}px)`,
    },
    whileInView: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    viewport: { once },
    transition: { duration, delay },
  };
}
