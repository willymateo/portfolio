import { JournalPage } from "iconoir-react";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { SECTIONS } from "./constants";

const AboutMe = () => (
  <div id={SECTIONS.ABOUT_ME} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.ABOUT_ME}`}>About Me</Link>
    </h2>

    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col">
        <h3 className="text-2xl">Hello there! My name is Willy Mateo</h3>
        <p className="italic text-slate-700">
          “If you are not going to tell the world who you are, the world is not going to tell you,
          how good you are.”
        </p>
      </div>

      <p>
        From an early age, I've been captivated by computers, igniting my journey as a programmer
        back in 2015 during high school. Today, as a Computer Engineer with a degree from ESPOL, I
        am resolute in my commitment to dedicating my life to this field. My enduring passion lies
        in unraveling the intricacies of the Internet, propelling me deeper into the realm of
        software development. During my leisure hours, I diligently hone my coding prowess, driven
        by an insatiable thirst for knowledge and improvement.
      </p>

      <PrimaryButton>
        <JournalPage />

        <span className="text-center">Download resume</span>
      </PrimaryButton>
    </div>
  </div>
);

export { AboutMe };
