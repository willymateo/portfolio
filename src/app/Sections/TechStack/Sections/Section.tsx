interface Props {
  children: React.ReactNode;
  title?: string;
}
const Section = ({ children, title = "" }: Props) => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">{title}</h3>

    <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">{children}</div>
  </div>
);

export { Section };
