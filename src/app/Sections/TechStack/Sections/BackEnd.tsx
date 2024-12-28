import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/shared/Icons/Express";
import { ElasticSearch } from "@/app/shared/Icons/ElasticSearch";
import { NodeJs as NodeJsIcon } from "@/app/shared/Icons/NodeJs";
import { Technologies } from "@/app/shared/Technologies";
import { NestJs } from "@/app/shared/Icons/NestJs";
import { Django } from "@/app/shared/Icons/Django";
import { Tag } from "@/app/shared/Tag";

const BackEnd = () => {
  const technologies = [
    {
      name: "Node Js",
      Icon: NodeJsIcon,
    },
    {
      name: "Express",
      Icon: ExpressIcon,
    },
    {
      name: "NestJs",
      Icon: NestJs,
    },
    {
      name: "Django",
      Icon: Django,
    },
    {
      name: "Elasticsearch",
      Icon: ElasticSearch,
    },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Supertest",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
  ];

  return (
    <Technologies title="Back-end">
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

export { BackEnd };
