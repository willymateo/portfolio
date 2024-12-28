"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion } from "motion/react";
import { forwardRef } from "react";

type MotionDivProps = HTMLMotionProps<"div">;

const MotionDiv = forwardRef<HTMLHeadingElement, MotionDivProps>(({ children, ...props }, ref) => (
  <motion.div ref={ref} {...props}>
    {children}
  </motion.div>
));

export { MotionDiv };
