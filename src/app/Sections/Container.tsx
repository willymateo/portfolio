import Link from "next/link";

import { MotionH2 } from "../shared/Motion/H2";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
  id: string;
}

const Container = ({ children, id, className = "", title = "" }: Readonly<Props>) => (
  <div id={id} className={`flex flex-col items-start gap-10 xl:flex-row xl:gap-44 ${className}`}>
    <MotionH2
      className="text-2xl font-bold text-[#d9d9d9] sm:text-3xl xl:text-7xl xl:sticky xl:top-32 xl:[writing-mode:vertical-lr]"
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -50 }}
      transition={{
        duration: 0.8,
        delay: 0.1,
      }}
    >
      <Link href={`#${id}`} className="whitespace-nowrap">
        {title}
      </Link>
    </MotionH2>

    {children}
  </div>
);

export { Container };
