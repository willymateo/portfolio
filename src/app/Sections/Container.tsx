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
      className="text-7xl font-bold text-[#d9d9d9] xl:sticky xl:top-32 xl:[writing-mode:vertical-lr]"
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.5 }}
      transition={{
        ease: [0, 0.71, 0.2, 1.01],
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
