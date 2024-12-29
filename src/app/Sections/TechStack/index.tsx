import { WebDevelopmentEnvironment } from "./Sections/WebDevelopmentEnvironment";
import { ProgrammingLanguages } from "./Sections/ProgrammingLanguages";
import { Databases } from "./Sections/DataBases";
import { FrontEnd } from "./Sections/FrontEnd";
import { BackEnd } from "./Sections/BackEnd";
import { DevOps } from "./Sections/DevOps";
import { Mobile } from "./Sections/Mobile";
import { Cloud } from "./Sections/Cloud";
import { Agile } from "./Sections/Agile";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const TechStack = () => (
  <Container id={SECTIONS.TECH_STACK} title="Tech stack">
    <div className="flex flex-col gap-20">
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
  </Container>
);

export { TechStack };
