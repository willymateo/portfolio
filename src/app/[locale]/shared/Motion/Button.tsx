"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type Props = HTMLMotionProps<"button">;

const MotionButton = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => (
  <motion.button ref={ref} {...props}>
    {children}
  </motion.button>
));

MotionButton.displayName = "MotionButton";

export { MotionButton };
