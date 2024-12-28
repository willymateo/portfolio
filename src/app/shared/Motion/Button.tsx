"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type MotionButtonProps = HTMLMotionProps<"button">;

const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, ...props }, ref) => (
    <motion.button ref={ref} {...props}>
      {children}
    </motion.button>
  ),
);

MotionButton.displayName = "MotionButton";

export { MotionButton };
