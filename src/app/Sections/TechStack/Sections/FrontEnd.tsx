import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactRouter as ReactRouterIcon } from "@/app/shared/Icons/ReactRouter";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { React as ReactIcon } from "@/app/shared/Icons/React";
import { TailwindCss } from "@/app/shared/Icons/TailwindCss";
import { MaterialUI } from "@/app/shared/Icons/MaterialUI";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { NextJs } from "@/app/shared/Icons/NextJs";
import { Vitest } from "@/app/shared/Icons/Vitest";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { Vite } from "@/app/shared/Icons/Vite";
import { Jest } from "@/app/shared/Icons/Jest";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Sass } from "@/app/shared/Icons/Sass";
import { NPM } from "@/app/shared/Icons/NPM";

const FrontEnd = () => {
  const technologies = [
    { name: "React", Icon: ReactIcon },
    { name: "Next Js", Icon: NextJs },
    { name: "Redux", Icon: ReduxIcon },
    { name: "React Router", Icon: ReactRouterIcon },
    { name: "Vite", Icon: Vite },
    { name: "Vitest", Icon: Vitest },
    { name: "Jest", Icon: Jest },
    { name: "React testing library", Icon: ReactIcon },
    {
      name: "SSR",
      Icon: () => <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />,
    },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Sass", Icon: Sass },
    { name: "Tailwind CSS", Icon: TailwindCss },
    { name: "Chakra UI", Icon: ChakraUI },
    { name: "Material UI", Icon: MaterialUI },
    { name: "NPM", Icon: NPM },
    { name: "Webpack", Icon: NPM },
    { name: "Rollup", Icon: NPM },
    { name: "i18next", Icon: NPM },
  ];

  return <Technologies title="Front-end" technologies={technologies} />;
};

export { FrontEnd };
