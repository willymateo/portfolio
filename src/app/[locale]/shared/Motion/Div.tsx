"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

export type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(({ children, ...props }, ref) => (
  <motion.div ref={ref} {...props}>
    {children}
  </motion.div>
));

MotionDiv.displayName = "MotionDiv";

export { MotionDiv };
