import { MouseEvent } from "react";

import { MotionButton } from "../Motion/Button";

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ onClick, children, className = "" }: Props) => (
  <MotionButton
    className={`flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-2 rounded-full bg-black text-white ${className}`}
    whileInView={{ opacity: 1, scale: 1 }}
    initial={{ opacity: 0, scale: 0.5 }}
    transition={{
      ease: [0, 0.71, 0.2, 1.01],
      duration: 0.8,
      delay: 0.1,
    }}
    onClick={onClick}
  >
    {children}
  </MotionButton>
);

export { PrimaryButton };
