import { faCss3, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Code, LaptopDevMode } from "iconoir-react";
import Link from "next/link";

import { Technologies } from "./Card/Technologies";
import { SECTIONS } from "../constants";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const isDark = false;

const Projects = () => (
  <div id={SECTIONS.PROJECTS} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.PROJECTS}`}>Projects</Link>
    </h2>

    <div className="flex flex-col gap-16">
      <Card
        description="NameGenius is a free web application that uses artificial intelligence to generate creative and unique names for your business, projects or team."
        imgUrl={
          isDark ? "/images/namegenius-dark-banner.png" : "/images/namegenius-light-banner.png"
        }
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

      <Card
        description="NameGenius is a web application that allows you to generate random names for your projects, companies, and more. It is built with React and TailwindCSS."
        imgUrl={
          isDark
            ? "/images/nightly-tunes-dark-banner.png"
            : "/images/nightly-tunes-light-banner.png"
        }
        websiteUrl="https://nightlytunes.netlify.app"
        imgAlt="Nightly tunes website"
        title="Nightly Tunes">
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
            <LaptopDevMode />
            <p className="text-center">Chakra UI</p>
          </Tag>
          <Tag>
            <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
            <p className="text-center">Netlify</p>
          </Tag>
        </Technologies>
      </Card>

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
    </div>
  </div>
);

export { Projects };
