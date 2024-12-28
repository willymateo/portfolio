"use client";

import { MotionDiv, MotionDivProps } from "./Motion/Div";

const Tag = ({ children, className = "", ...props }: MotionDivProps) => (
  <MotionDiv
    className={`flex flex-row items-center justify-center flex-wrap gap-3 bg-black bg-opacity-5 rounded-full px-4 py-2 hover:shadow-lg  ${className}`}
    {...props}
  >
    {children}
  </MotionDiv>
);

export { Tag };
