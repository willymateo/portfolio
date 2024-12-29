"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

export type MotionLiProps = HTMLMotionProps<"li">;

const MotionLi = forwardRef<HTMLLIElement, MotionLiProps>(({ children, ...props }, ref) => (
  <motion.li ref={ref} {...props}>
    {children}
  </motion.li>
));

MotionLi.displayName = "MotionLi";

export { MotionLi };
