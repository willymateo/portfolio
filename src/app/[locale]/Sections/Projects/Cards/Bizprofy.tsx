import { faClipboardList } from "@fortawesome/free-solid-svg-icons/faClipboardList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { Express as ExpressIcon } from "@/app/[locale]/shared/Icons/Express";
import { NodeJs as NodeJsIcon } from "@/app/[locale]/shared/Icons/NodeJs";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { TailwindCss } from "@/app/[locale]/shared/Icons/TailwindCss";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { MaterialUI } from "@/app/[locale]/shared/Icons/MaterialUI";
import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { PostgreSQL } from "@/app/[locale]/shared/Icons/PostgreSQL";
import { Sequelize } from "@/app/[locale]/shared/Icons/Sequelize";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import bizprofy from "@/../public/images/projects/bizprofy.png";
import { TypeORM } from "@/app/[locale]/shared/Icons/TypeORM";
import { Resend } from "@/app/[locale]/shared/Icons/Resend";
import { NestJs } from "@/app/[locale]/shared/Icons/NestJs";
import { Vercel } from "@/app/[locale]/shared/Icons/Vercel";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { NextJs } from "@/app/[locale]/shared/Icons/NextJs";
import { Docker } from "@/app/[locale]/shared/Icons/Docker";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { JWT } from "@/app/[locale]/shared/Icons/JWT";
import { Card } from "./Card";

const Bizprofy = () => {
  const t = useTranslations("home.projects.bizprofy");

  const technologies = [
    { name: "TypeScript", Icon: TypeScript },
    { name: "React", Icon: ReactIcon },
    { name: "Next Js", Icon: NextJs },
    { name: "Redux", Icon: ReduxIcon },
    { name: "Material UI", Icon: MaterialUI },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Tailwind CSS", Icon: TailwindCss },
    {
      name: "React Hook Form",
      Icon: () => <FontAwesomeIcon icon={faClipboardList} className="w-[24px] h-[24px]" />,
    },
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
      name: "Resend",
      Icon: Resend,
    },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    {
      name: "JWT",
      Icon: JWT,
    },
    { name: "PostgreSQL", Icon: PostgreSQL },
    { name: "Vercel", Icon: Vercel },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
    { name: "Docker", Icon: Docker },
  ];

  return (
    <Card
      description={`${t("Bizprofy is a comprehensive SAAS platform designed to streamline inventory management for businesses The system allows users to manage stock in, stock out, and real-time stock levels across multiple warehouses With features like user management, product categorization, customer and provider tracking, and real-time stock updates, Bizprofy provides a centralized solution for all inventory needs This project highlights my ability to develop robust, scalable, and user-friendly applications that address complex business requirements")}.`}
      imgAlt={t("Bizprofy website")}
      imgUrl={bizprofy.src}
      title="Bizprofy"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { Bizprofy };
