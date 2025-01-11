"use client";

import { MotionLi, MotionLiProps } from "./Li";

const SocialNetworkIconContainer = ({ children, ...props }: MotionLiProps) => (
  <MotionLi
    className="bg-darkosPortfolio-black/10 dark:bg-darkosPortfolio-gray/10 rounded-full px-5 py-4 hover:shadow-2xl"
    transition={{
      scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      duration: 0.1,
      ...(props.transition ?? {}),
    }}
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0 }}
    {...props}
  >
    {children}
  </MotionLi>
);

export { SocialNetworkIconContainer };
