import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/[locale]/shared/Icons/Express";
import { ElasticSearch } from "@/app/[locale]/shared/Icons/ElasticSearch";
import { NodeJs as NodeJsIcon } from "@/app/[locale]/shared/Icons/NodeJs";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { NestJs } from "@/app/[locale]/shared/Icons/NestJs";
import { Django } from "@/app/[locale]/shared/Icons/Django";

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
