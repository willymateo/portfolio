import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { Vercel } from "@/app/shared/Icons/Vercel";
import { Github } from "@/app/shared/Icons/Github";
import { NextJs } from "@/app/shared/Icons/NextJs";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Git } from "@/app/shared/Icons/Git";
import { Card } from "./Card";

const isDark = false;

const NameGenius = () => {
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
      description="NameGenius is a free web application designed to solve the challenge of finding creative and unique names for businesses, projects, or teams. By leveraging artificial intelligence, it generates tailored name suggestions, streamlining a process that can be time-consuming and difficult. The application offers an intuitive user experience with features like dark and light modes, making it accessible for a wide range of users. NameGenius simplifies the naming process by utilizing cutting-edge technology to inspire creativity and save time."
      imgUrl={isDark ? "/images/namegenius-dark-banner.png" : "/images/namegenius-light-banner.png"}
      websiteUrl="https://www.namegenius.app"
      imgAlt="NameGenius website"
      title="NameGenius"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { NameGenius };
