import { ReactNode } from "react";

type Props = {
  subTitleClassName?: string;
  children: ReactNode;
};

const SubTitle = ({ children, subTitleClassName = "" }: Props) => (
  <div className="flex flex-col gap-5">
    <h3 className={`text-xl sm:text-3xl font-bold ${subTitleClassName}`}>{children}</h3>

    <hr className="w-28 h-[2px] bg-black border-0" />
  </div>
);

export { SubTitle };
