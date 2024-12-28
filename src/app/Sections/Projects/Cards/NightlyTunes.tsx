import { React as ReactIcon } from "@/app/shared/Icons/React";
import { ReactRouter } from "@/app/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { Github } from "@/app/shared/Icons/Github";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { Vite } from "@/app/shared/Icons/Vite";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Git } from "@/app/shared/Icons/Git";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const isDark = false;

const NightlyTunes = () => (
  <Card
    description="Nightly Tunes is a music library designed to make discovering and enjoying music easier. By offering a platform where users can listen to their favorite songs and explore new ones, it addresses the challenge of finding fresh music. With support for multiple languages and light or dark modes, it provides a personalized and user-friendly experience, simplifying the process of music discovery and playback."
    imgUrl={
      isDark ? "/images/nightly-tunes-dark-banner.png" : "/images/nightly-tunes-light-banner.png"
    }
    websiteUrl="https://nightlytunes.netlify.app"
    imgAlt="Nightly tunes website"
    title="Nightly Tunes"
  >
    <Technologies>
      <Tag>
        <JavaScript />

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <ReactIcon />

        <p className="text-center">React</p>
      </Tag>

      <Tag>
        <Vite />

        <p className="text-center">Vite</p>
      </Tag>

      <Tag>
        <ChakraUI />

        <p className="text-center">Chakra UI</p>
      </Tag>

      <Tag>
        <ReactRouter />

        <p className="text-center">React Router</p>
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
        <p className="text-center">Netlify</p>
      </Tag>

      <Tag>
        <Git />

        <p className="text-center">Git</p>
      </Tag>

      <Tag>
        <Github />

        <p className="text-center">Github</p>
      </Tag>
    </Technologies>
  </Card>
);

export { NightlyTunes };
