import { useTranslations } from "next-intl";

import nameGeniusLightBanner from "@/../public/images/projects/namegenius-light-banner.jpg";
import nameGeniusDarkBanner from "@/../public/images/projects/namegenius-dark-banner.jpg";
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

const isDark = false;

const CherryShopLanding = () => {
  const t = useTranslations("home.projects.cherryShopLanding");

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
      description={t("")}
      imgUrl={isDark ? nameGeniusDarkBanner.src : nameGeniusLightBanner.src}
      websiteUrl="https://cherryshop.vercel.app"
      imgAlt={t("Cherry Shop Landing Page")}
      title={t("Cherry Shop Landing Page")}
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { CherryShopLanding };
