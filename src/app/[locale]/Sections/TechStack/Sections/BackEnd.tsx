import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/[locale]/shared/Icons/Express";
import { ElasticSearch } from "@/app/[locale]/shared/Icons/ElasticSearch";
import { NodeJs as NodeJsIcon } from "@/app/[locale]/shared/Icons/NodeJs";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Sequelize } from "@/app/[locale]/shared/Icons/Sequelize";
import { TypeORM } from "@/app/[locale]/shared/Icons/TypeORM";
import { NestJs } from "@/app/[locale]/shared/Icons/NestJs";
import { Django } from "@/app/[locale]/shared/Icons/Django";
import { Resend } from "@/app/[locale]/shared/Icons/Resend";
import { JWT } from "@/app/[locale]/shared/Icons/JWT";

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
      name: "Sequelize",
      Icon: Sequelize,
    },
    {
      name: "NestJs",
      Icon: NestJs,
    },
    {
      name: "TypeORM",
      Icon: TypeORM,
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
      name: "Resend",
      Icon: Resend,
    },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Supertest",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    {
      name: "JWT",
      Icon: JWT,
    },
  ];

  return <Technologies title="Back-end" technologies={technologies} />;
};

export { BackEnd };
