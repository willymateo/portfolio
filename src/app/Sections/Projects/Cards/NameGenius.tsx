import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Code, LaptopDevMode } from "iconoir-react";

import { Technologies } from "./Card/Technologies";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const isDark = false;

const NameGenius = () => (
  <Card
    description="NameGenius is a free web application that uses artificial intelligence to generate creative and unique names for your business, projects or team."
    imgUrl={isDark ? "/images/namegenius-dark-banner.png" : "/images/namegenius-light-banner.png"}
    websiteUrl="https://www.namegenius.app"
    imgAlt="NameGenius website"
    title="NameGenius">
    <Technologies>
      <Tag>
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React Js</p>
      </Tag>
      <Tag>
        <LaptopDevMode />
        <p className="text-center">Next Js</p>
      </Tag>
      <Tag>
        <Code />
        <p className="text-center">TypeScript</p>
      </Tag>
      <Tag>
        <LaptopDevMode />
        <p className="text-center">Chakra UI</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
        <p className="text-center">Vercel</p>
      </Tag>
    </Technologies>
  </Card>
);

export { NameGenius };
