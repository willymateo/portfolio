"use client";

import { MotionDiv, MotionDivProps } from "./Div";

const Tag = ({ children, className = "", ...props }: MotionDivProps) => (
  <MotionDiv
    className={`flex flex-row items-center justify-center flex-wrap gap-3 bg-darkosPortfolio-black/5 dark:bg-darkosPortfolio-gray/5 rounded-full px-4 py-2 hover:shadow-lg ${className}`}
    {...props}
  >
    {children}
  </MotionDiv>
);

export { Tag };
