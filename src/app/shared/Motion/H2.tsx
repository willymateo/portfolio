"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type MotionH2Props = HTMLMotionProps<"h2">;

const MotionH2 = forwardRef<HTMLHeadingElement, MotionH2Props>(({ children, ...props }, ref) => (
  <motion.h2 ref={ref} {...props}>
    {children}
  </motion.h2>
));

export { MotionH2 };
