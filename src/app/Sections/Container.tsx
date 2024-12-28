import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
  id: string;
}

const Container = ({ children, id, className = "", title = "" }: Readonly<Props>) => (
  <div id={id} className={`flex flex-row items-start gap-44 ${className}`}>
    <h2 className="text-7xl font-bold text-[#d9d9d9] sticky top-32 [writing-mode:vertical-lr]">
      <Link href={`#${id}`} className="whitespace-nowrap">
        {title}
      </Link>
    </h2>

    {children}
  </div>
);

export { Container };
