import { faNewspaper } from "@fortawesome/free-regular-svg-icons/faNewspaper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { PrimaryButton } from "../shared/Buttons/Primary";
import { DinamicQuote } from "../shared/DinamicQuote";
import { Container } from "./Container";
import { SECTIONS } from "./constants";

const AboutMe = () => (
  <Container id={SECTIONS.ABOUT_ME} title="About me">
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col">
        <h3 className="text-2xl">Hello there! My name is Willy Mateo</h3>
        <DinamicQuote />
      </div>

      <p>
        I’m Willy Mateo, a passionate Computer Science Engineer from
        <strong> ESPOL, Ecuador’s top university</strong>, with a strong focus on full-stack
        development. My career so far has centered on creating efficient, high-performing
        applications. I thrive on solving complex challenges and am committed to building scalable
        solutions. I identify myself with excellence, and this drives me to deliver top-quality code
        and always look for ways to optimize processes, ensuring both user satisfaction and
        performance.
      </p>

      <p>
        Technically, I bring extensive experience in
        <strong> TypeScript, JavaScript, React, Next.js, Redux and testing libraries</strong>;
        combined with a deep understanding of backend technologies like{" "}
        <strong>Node.js, Express.js, Nest.js, Python, Django, MySQL, PostgreSQL and MongoDB</strong>
        ; My experience with cloud services is based on
        <strong> AWS, Firebase, Vercel, ElasticSearch, Terraform and Docker</strong>. Beyond
        technical expertise, I possess strong communication skills and a collaborative mindset. My
        leadership qualities enable me to work effectively across teams, mentor peers, and ensure
        that every project I touch meets high standards.
      </p>

      <p>
        Looking ahead, I am determined to continuously grow my skills,
        <strong> with the ultimate goal of becoming a software architect</strong>. I am driven by
        the idea of designing systems that are both efficient and scalable, ensuring that technology
        not only meets today’s demands but is also prepared for tomorrow’s challenges. I am
        constantly improving, learning, and innovating, and I look forward to opportunities that
        push me to develop my expertise and leadership further.
      </p>

      <Link href="/docs/CV.pdf" rel="noreferrer" target="_blank">
        <PrimaryButton>
          <FontAwesomeIcon icon={faNewspaper} className="w-[24px] h-[24px]" />

          <span className="text-center">Download resume</span>
        </PrimaryButton>
      </Link>
    </div>
  </Container>
);

export { AboutMe };
