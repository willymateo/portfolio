import { React as ReactIcon } from "@/app/shared/Icons/React";
import { ReactRouter } from "@/app/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { ChakraUI } from "@/app/shared/Icons/ChakraUI";
import { Netlify } from "@/app/shared/Icons/Netlify";
import { Github } from "@/app/shared/Icons/Github";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { Vite } from "@/app/shared/Icons/Vite";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Git } from "@/app/shared/Icons/Git";
import { Card } from "./Card";

const isDark = false;

const NightlyTunes = () => {
  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "React", Icon: ReactIcon },
    { name: "Vite", Icon: Vite },
    { name: "Chakra UI", Icon: ChakraUI },
    { name: "React Router", Icon: ReactRouter },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Netlify", Icon: Netlify },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
  ];

  return (
    <Card
      description="Nightly Tunes is a music library designed to make discovering and enjoying music easier. By offering a platform where users can listen to their favorite songs and explore new ones, it addresses the challenge of finding fresh music. With support for multiple languages and light or dark modes, it provides a personalized and user-friendly experience, simplifying the process of music discovery and playback."
      imgUrl={
        isDark ? "/images/nightly-tunes-dark-banner.png" : "/images/nightly-tunes-light-banner.png"
      }
      websiteUrl="https://nightlytunes.netlify.app"
      imgAlt="Nightly tunes website"
      title="Nightly Tunes"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { NightlyTunes };
