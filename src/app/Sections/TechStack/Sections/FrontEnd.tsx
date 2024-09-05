import { faCss3, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { faNpm } from "@fortawesome/free-brands-svg-icons/faNpm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html5, Css3, LaptopDevMode } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const FrontEnd = () => (
  <Technologies title="Front-end">
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">Redux</p>
    </Tag>
    <Tag>
      <LaptopDevMode />
      <p className="text-center">Next Js</p>
    </Tag>
    <Tag>
      <LaptopDevMode />
      <p className="text-center">SSR</p>
    </Tag>
    <Tag>
      <Html5 />
      <p className="text-center">HTML-5</p>
    </Tag>
    <Tag>
      <Css3 />
      <p className="text-center">CSS 3</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faSass} className="w-[24px] h-[24px]" />
      <p className="text-center">Sass</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
      <p className="text-center">Tailwind CSS</p>
    </Tag>
    <Tag>
      <LaptopDevMode />
      <p className="text-center">Chakra UI</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
      <p className="text-center">Material UI</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNpm} className="w-[24px] h-[24px]" />
      <p className="text-center">Webpack</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNpm} className="w-[24px] h-[24px]" />
      <p className="text-center">Rollup</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNpm} className="w-[24px] h-[24px]" />
      <p className="text-center">NPM</p>
    </Tag>
  </Technologies>
);

export { FrontEnd };
