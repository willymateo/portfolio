import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Agile = () => {
  const technologies = [
    {
      name: "Scrum",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Kanban",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
  ];

  return (
    <Technologies title="Agile">
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

export { Agile };
