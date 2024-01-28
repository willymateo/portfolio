import { faCss3, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LaptopDevMode } from "iconoir-react";

import { Technologies } from "./Card/Technologies";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const MIProjectManager = () => (
  <Card
    description="NameGenius is a web application that allows you to generate random names for your projects, companies, and more. It is built with React and TailwindCSS."
    imgAlt="System for managing thesis projects of ESPOL"
    title="System for managing ESPOL thesis projects"
    imgUrl="/images/mi-project-manager-banner.png">
    <Technologies>
      <Tag>
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React Js</p>
      </Tag>
      <Tag>
        <LaptopDevMode />
        <p className="text-center">Vite</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p className="text-center">JavaScript</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
        <p className="text-center">Tailwind CSS</p>
      </Tag>
    </Technologies>
  </Card>
);

export { MIProjectManager };
