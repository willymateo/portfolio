import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ReactRouter as ReactRouterIcon } from "@/app/shared/Icons/ReactRouter";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { React as ReactIcon } from "@/app/shared/Icons/React";
import { TailwindCss } from "@/app/shared/Icons/TailwindCss";
import { MaterialUI } from "@/app/shared/Icons/MaterialUI";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { Webpack } from "@/app/shared/Icons/Webpack";
import { I18next } from "@/app/shared/Icons/I18next";
import { NextJs } from "@/app/shared/Icons/NextJs";
import { Rollup } from "@/app/shared/Icons/Rollup";
import { Vitest } from "@/app/shared/Icons/Vitest";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { Vite } from "@/app/shared/Icons/Vite";
import { Jest } from "@/app/shared/Icons/Jest";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Sass } from "@/app/shared/Icons/Sass";
import { NPM } from "@/app/shared/Icons/NPM";
import { Tag } from "@/app/shared/Tag";

const FrontEnd = () => (
  <Technologies title="Front-end">
    <Tag>
      <ReactIcon />

      <p className="text-center">React</p>
    </Tag>

    <Tag>
      <NextJs />

      <p className="text-center">Next Js</p>
    </Tag>

    <Tag>
      <ReduxIcon />

      <p className="text-center">Redux</p>
    </Tag>

    <Tag>
      <ReactRouterIcon />

      <p className="text-center">React Router</p>
    </Tag>

    <Tag>
      <Vite />

      <p className="text-center">Vite</p>
    </Tag>

    <Tag>
      <Vitest />

      <p className="text-center">Vitest</p>
    </Tag>

    <Tag>
      <Jest />

      <p className="text-center">Jest</p>
    </Tag>

    <Tag>
      <ReactIcon />

      <p className="text-center">React testing library</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />

      <p className="text-center">SSR</p>
    </Tag>

    <Tag>
      <HTML5 />

      <p className="text-center">HTML-5</p>
    </Tag>

    <Tag>
      <CSS3 />

      <p className="text-center">CSS 3</p>
    </Tag>

    <Tag>
      <Sass />

      <p className="text-center">Sass</p>
    </Tag>

    <Tag>
      <TailwindCss />

      <p className="text-center">Tailwind CSS</p>
    </Tag>

    <Tag>
      <ChakraUI />

      <p className="text-center">Chakra UI</p>
    </Tag>

    <Tag>
      <MaterialUI />

      <p className="text-center">Material UI</p>
    </Tag>

    <Tag>
      <NPM />

      <p className="text-center">NPM</p>
    </Tag>

    <Tag>
      <Webpack />

      <p className="text-center">Webpack</p>
    </Tag>

    <Tag>
      <Rollup />

      <p className="text-center">Rollup</p>
    </Tag>

    <Tag>
      <I18next />

      <p className="text-center">i18next</p>
    </Tag>
  </Technologies>
);

export { FrontEnd };
