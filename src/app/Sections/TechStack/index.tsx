import Link from "next/link";

import { WebDevelopmentEnvironment } from "./Sections/WebDevelopmentEnvironment";
import { ProgrammingLanguages } from "./Sections/ProgrammingLanguages";
import { Databases } from "./Sections/DataBases";
import { FrontEnd } from "./Sections/FrontEnd";
import { BackEnd } from "./Sections/BackEnd";
import { DevOps } from "./Sections/DevOps";
import { Mobile } from "./Sections/Mobile";
import { Cloud } from "./Sections/Cloud";
import { Agile } from "./Sections/Agile";
import { SECTIONS } from "../constants";

const TechStack = () => (
  <div id={SECTIONS.TECH_STACK} className="flex flex-col gap-8">
    <h2 className="text-4xl font-bold">
      <Link href={`#${SECTIONS.TECH_STACK}`}>Tech stack</Link>
    </h2>

    <div className="flex flex-col gap-8">
      <ProgrammingLanguages />
      <FrontEnd />
      <BackEnd />
      <Mobile />
      <Databases />
      <Cloud />
      <DevOps />
      <WebDevelopmentEnvironment />
      <Agile />
    </div>
  </div>
);

export { TechStack };
