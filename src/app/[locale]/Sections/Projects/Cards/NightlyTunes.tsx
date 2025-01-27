import { useTranslations } from "next-intl";

import nightlyTunesLightBanner from "@/../public/images/projects/nightly-tunes-light-banner.png";
import nightlyTunesDarkBanner from "@/../public/images/projects/nightly-tunes-dark-banner.png";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { ReactRouter } from "@/app/[locale]/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { ChakraUI } from "@/app/[locale]/shared/Icons/ChakraUI";
import { Netlify } from "@/app/[locale]/shared/Icons/Netlify";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { Vite } from "@/app/[locale]/shared/Icons/Vite";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const isDark = false;

const NightlyTunes = () => {
  const t = useTranslations("home.projects");

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
      description={t(
        "Nightly Tunes is a music library designed to make discovering and enjoying music easier By offering a platform where users can listen to their favorite songs and explore new ones, it addresses the challenge of finding fresh music With support for multiple languages and light or dark modes, it provides a personalized and user-friendly experience, simplifying the process of music discovery and playback",
      )}
      imgUrl={isDark ? nightlyTunesDarkBanner.src : nightlyTunesLightBanner.src}
      websiteUrl="https://nightlytunes.netlify.app"
      imgAlt="Nightly tunes website"
      title="Nightly Tunes"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { NightlyTunes };
