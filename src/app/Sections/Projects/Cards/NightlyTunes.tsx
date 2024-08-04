import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { LaptopDevMode } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const isDark = false;

const NightlyTunes = () => (
  <Card
    description="A music library that allows you to listen your favorite songs and discover new ones. It uses the Napster API to search for songs and artists, and the Vime library to play the songs. You can use this web app in English or Spanish and it supports both light and dark mode."
    imgUrl={
      isDark ? "/images/nightly-tunes-dark-banner.png" : "/images/nightly-tunes-light-banner.png"
    }
    websiteUrl="https://nightlytunes.netlify.app"
    imgAlt="Nightly tunes website"
    title="Nightly Tunes">
    <Technologies>
      <Tag>
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React</p>
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
);

export { NightlyTunes };
