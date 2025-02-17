"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"h2">;

const MotionH2 = forwardRef<HTMLHeadingElement, Props>(({ children, ...props }, ref) => (
  <motion.h2 ref={ref} {...props}>
    {children}
  </motion.h2>
));

MotionH2.displayName = "MotionH2";

export { MotionH2 };
