import { faCss3, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html5, Css3, LaptopDevMode } from "iconoir-react";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const FrontEnd = () => (
  <Section title="Front-end">
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React Js</p>
    </Tag>
    <Tag>
      <LaptopDevMode />
      <p className="text-center">Next Js</p>
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
  </Section>
);

export { FrontEnd };