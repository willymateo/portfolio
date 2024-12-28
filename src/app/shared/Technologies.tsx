import { SubTitle } from "./SubTitle";

interface Props {
  children: React.ReactNode;
  title?: string;
}

const Technologies = ({ children, title = "Technologies" }: Props) => (
  <div className="flex flex-col gap-10">
    <SubTitle>{title}</SubTitle>

    <div className="flex flex-row flex-wrap items-center gap-x-5 gap-y-3">{children}</div>
  </div>
);

export { Technologies };
