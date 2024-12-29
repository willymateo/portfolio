import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { Python } from "@/app/shared/Icons/Python";

const ProgrammingLanguages = () => {
  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Python", Icon: Python },
  ];

  return <Technologies title="Programming Languages" technologies={technologies} />;
};

export { ProgrammingLanguages };
