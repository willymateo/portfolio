import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/shared/Icons/Express";
import { ElasticSearch } from "@/app/shared/Icons/ElasticSearch";
import { NodeJs as NodeJsIcon } from "@/app/shared/Icons/NodeJs";
import { Technologies } from "@/app/shared/Technologies";
import { NestJs } from "@/app/shared/Icons/NestJs";
import { Django } from "@/app/shared/Icons/Django";

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

  return <Technologies title="Back-end" technologies={technologies} />;
};

export { BackEnd };
