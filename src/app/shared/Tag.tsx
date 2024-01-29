interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Tag = ({ children, className = "" }: Props) => (
  <div
    className={`flex flex-row items-center justify-center flex-wrap gap-3 bg-black bg-opacity-5 rounded-full px-4 py-2 hover:shadow-lg  ${className}`}>
    {children}
  </div>
);

export { Tag };
