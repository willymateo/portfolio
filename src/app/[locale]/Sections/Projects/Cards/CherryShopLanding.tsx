import { useTranslations } from "next-intl";

import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import cherryShop from "@/../public/images/projects/cherry-shop.png";
import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Vercel } from "@/app/[locale]/shared/Icons/Vercel";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { NextJs } from "@/app/[locale]/shared/Icons/NextJs";
import { Lottie } from "@/app/[locale]/shared/Icons/Lottie";
import { Motion } from "@/app/[locale]/shared/Icons/Motion";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const CherryShopLanding = () => {
  const t = useTranslations("home.projects.cherryShopLanding");

  const technologies = [
    { name: "TypeScript", Icon: TypeScript },
    { name: "React", Icon: ReactIcon },
    { name: "Next Js", Icon: NextJs },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Vercel", Icon: Vercel },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
    { name: "Lottie", Icon: Lottie },
    { name: "Motion", Icon: Motion },
  ];

  return (
    <Card
      description={`${t("Cherry Shop is a vibrant e-commerce platform specializing in the latest fashion clothing, designed to reflect the founder's love for pink, cute aesthetics, and modern fashion As the developer, I created a visually engaging and user-friendly landing page that captures the brand's unique identity The design emphasizes bold, playful visuals, seamless navigation, and a responsive layout to ensure an enjoyable shopping experience across all devices This project showcases my ability to blend creativity with technical expertise to bring a brand's vision to life")}.`}
      websiteUrl="https://cherryshop.vercel.app"
      imgAlt={t("Cherry Shop Landing Page")}
      title={t("Cherry Shop Landing Page")}
      imgUrl={cherryShop.src}
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { CherryShopLanding };
