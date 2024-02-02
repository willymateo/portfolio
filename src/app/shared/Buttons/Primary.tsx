import { MouseEvent } from "react";

interface Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string;
}

const PrimaryButton = ({ onClick, children, className = "" }: Props) => (
  <button
    className={`flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2 px-4 py-2 rounded-full bg-black text-white ${className}`}
    onClick={onClick}>
    {children}
  </button>
);

export { PrimaryButton };
