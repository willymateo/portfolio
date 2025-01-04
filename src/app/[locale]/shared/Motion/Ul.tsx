"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

export type MotionUlProps = HTMLMotionProps<"ul">;

const MotionUl = forwardRef<HTMLUListElement, MotionUlProps>(({ children, ...props }, ref) => (
  <motion.ul ref={ref} {...props}>
    {children}
  </motion.ul>
));

MotionUl.displayName = "MotionUl";

export { MotionUl };
