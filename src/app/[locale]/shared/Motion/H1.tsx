"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"h1">;

const MotionH1 = forwardRef<HTMLHeadingElement, Props>(({ children, ...props }, ref) => (
  <motion.h1 ref={ref} {...props}>
    {children}
  </motion.h1>
));

MotionH1.displayName = "MotionH1";

export { MotionH1 };
