import "./index.css";

type Props = {
  className?: string;
};

const NewtonsCradle = ({ className = "" }: Props) => (
  <div className={`newtons-cradle ${className}`}>
    <div className="newtons-cradle__dot" />
    <div className="newtons-cradle__dot" />
    <div className="newtons-cradle__dot" />
    <div className="newtons-cradle__dot" />
  </div>
);

export { NewtonsCradle };
