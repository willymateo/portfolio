interface Props {
  children: React.ReactNode;
}

const Technologies = ({ children }: Props) => (
  <div className="flex flex-col gap-1">
    <h4 className="text-xl">Technologies</h4>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row flex-wrap gap-x-5 gap-y-3">{children}</div>
    </div>
  </div>
);

export { Technologies };
