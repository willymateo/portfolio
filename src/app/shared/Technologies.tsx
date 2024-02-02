interface Props {
  children: React.ReactNode;
  title?: string;
}

const Technologies = ({ children, title = "Technologies" }: Props) => (
  <div className="flex flex-col gap-1">
    <h4 className="text-xl">{title}</h4>

    <div className="flex flex-row flex-wrap items-center gap-x-5 gap-y-3">{children}</div>
  </div>
);

export { Technologies };
