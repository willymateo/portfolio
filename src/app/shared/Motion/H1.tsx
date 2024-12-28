"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type MotionH1Props = HTMLMotionProps<"h1">;

const MotionH1 = forwardRef<HTMLHeadingElement, MotionH1Props>(({ children, ...props }, ref) => (
  <motion.h1 ref={ref} {...props}>
    {children}
  </motion.h1>
));

export { MotionH1 };
