import { faClipboardList } from "@fortawesome/free-solid-svg-icons/faClipboardList";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { Express as ExpressIcon } from "@/app/[locale]/shared/Icons/Express";
import { NodeJs as NodeJsIcon } from "@/app/[locale]/shared/Icons/NodeJs";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import titiApp from "@/../public/images/projects/titi-app.png";
import { PostgreSQL } from "../../shared/Icons/PostgreSQL";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { Sequelize } from "../../shared/Icons/Sequelize";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Expo } from "../../shared/Icons/Expo";
import { SWR } from "../../shared/Icons/SWR";
import { JWT } from "../../shared/Icons/JWT";
import { Card } from "./Card";

const Titi = () => {
  const t = useTranslations("projects.titi");

  const technologies = [
    { name: "TypeScript", Icon: TypeScript },
    { name: "React Native", Icon: ReactIcon },
    { name: "Redux", Icon: ReduxIcon },
    { name: "Expo", Icon: Expo },
    { name: "SWR", Icon: SWR },
    {
      name: "React Hook Form",
      Icon: () => <FontAwesomeIcon icon={faClipboardList} className="w-[24px] h-[24px]" />,
    },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
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
    { name: "PostgreSQL", Icon: PostgreSQL },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    {
      name: "JWT",
      Icon: JWT,
    },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
  ];

  return (
    <Card
      description={`${t("Titi is a dynamic app designed for users to publish and discover adventures happening within the next 24 hours Whether it’s a last-minute date or an impromptu meetup, Titi connects people looking for spontaneous experiences in real-time This project showcases my ability to create engaging, time-sensitive applications with a focus on user interaction and real-time updates, emphasizing creativity and technical execution")}.`}
      imgAlt={t("Titi app")}
      imgUrl={titiApp.src}
      title="Titi"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { Titi };
