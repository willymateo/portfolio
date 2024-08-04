import { JournalPage } from "iconoir-react";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { DinamicQuote } from "../shared/DinamicQuote";
import { SECTIONS } from "./constants";

const AboutMe = () => (
  <div id={SECTIONS.ABOUT_ME} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.ABOUT_ME}`}>About Me</Link>
    </h2>

    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col">
        <h3 className="text-2xl">Hello there! My name is Willy Mateo</h3>
        <DinamicQuote />
      </div>

      <p>
        As an accomplished Computer Science Engineer with over four years of dedicated experience in
        full-stack development, I bring a robust skill set focused on React, NextJs, NodeJs,
        Express, TypeScript, JavaScript, Redux, MySQL, PostgreSQL, Material UI and Tailwind CSS
        technologies. I also have knowledge in AWS, Firebase, Docker, Terraform, React Native, and
        the use of agile methodologies to deliver superior results. Recognized for consistently
        achieving performance excellence, I am committed to upholding the highest standards of clean
        code practices. Among my most outstanding achievements is the development of automated
        actions within a logistics system to significantly reduce users' time and improve their
        experience.
      </p>

      <Link href="/docs/CV.pdf" rel="noreferrer" target="_blank">
        <PrimaryButton>
          <JournalPage />

          <span className="text-center">Download resume</span>
        </PrimaryButton>
      </Link>
    </div>
  </div>
);

export { AboutMe };
