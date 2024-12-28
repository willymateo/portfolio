import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { Python } from "@/app/shared/Icons/Python";
import { Tag } from "@/app/shared/Tag";

const ProgrammingLanguages = () => {
  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Python", Icon: Python },
  ];

  return (
    <Technologies title="Programming Languages">
      {technologies.map(({ name, Icon }, index) => (
        <Tag
          key={name}
          transition={{
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            delay: index * 0.3,
            duration: 0.1,
          }}
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0 }}
        >
          <Icon />

          <p className="text-center">{name}</p>
        </Tag>
      ))}
    </Technologies>
  );
};

export { ProgrammingLanguages };
