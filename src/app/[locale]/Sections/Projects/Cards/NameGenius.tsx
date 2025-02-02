import { useTranslations } from "next-intl";

import nameGenius from "@/../public/images/projects/namegenius.png";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { ChakraUI } from "@/app/[locale]/shared/Icons/ChakraUI";
import { Vercel } from "@/app/[locale]/shared/Icons/Vercel";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { NextJs } from "@/app/[locale]/shared/Icons/NextJs";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const NameGenius = () => {
  const t = useTranslations("home.projects.nameGenius");

  const technologies = [
    { name: "TypeScript", Icon: TypeScript },
    { name: "React", Icon: ReactIcon },
    { name: "Next Js", Icon: NextJs },
    { name: "Redux", Icon: ReduxIcon },
    { name: "Chakra UI", Icon: ChakraUI },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Vercel", Icon: Vercel },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
  ];

  return (
    <Card
      description={`${t(
        "NameGenius is a free web application designed to solve the challenge of finding creative and unique names for businesses, projects, or teams By leveraging artificial intelligence, it generates tailored name suggestions, streamlining a process that can be time-consuming and difficult The application offers an intuitive user experience with features like dark and light modes, making it accessible for a wide range of users NameGenius simplifies the naming process by utilizing cutting-edge technology to inspire creativity and save time",
      )}.`}
      websiteUrl="https://www.namegenius.app"
      imgAlt={t("NameGenius website")}
      imgUrl={nameGenius.src}
      title="NameGenius"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { NameGenius };
