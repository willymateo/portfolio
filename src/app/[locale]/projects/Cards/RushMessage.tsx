import { useTranslations } from "next-intl";

import rushMessage from "@/../public/images/projects/rush-message.png";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Firebase } from "@/app/[locale]/shared/Icons/Firebase";
import { Vercel } from "@/app/[locale]/shared/Icons/Vercel";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { NextJs } from "@/app/[locale]/shared/Icons/NextJs";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const RushMessage = () => {
  const t = useTranslations("projects.rushMessage");

  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "React", Icon: ReactIcon },
    { name: "Next Js", Icon: NextJs },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Vercel", Icon: Vercel },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
    {
      name: "Firebase",
      Icon: Firebase,
    },
    { name: "Firestore", Icon: Firebase },
  ];

  return (
    <Card
      description={`${t("Rush Message is a real-time chat application built with Firebase Firestore, showcasing seamless instant messaging and message syncing across devices Leveraging Firestore’s real-time listeners and cloud integration, the app delivers a smooth, scalable, and responsive user experience This project highlights my expertise in developing real-time applications and utilizing cloud-based technologies to create efficient, modern solutions")}.`}
      websiteUrl="https://github.com/willymateo/rushMessage"
      imgAlt={t("Rush Message app")}
      imgUrl={rushMessage.src}
      title="Rush Message"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { RushMessage };
