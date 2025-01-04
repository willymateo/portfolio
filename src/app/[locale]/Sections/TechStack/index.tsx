import { useTranslations } from "next-intl";

import { DevelopmentEnvironment } from "./Sections/DevelopmentEnvironment";
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

const TechStack = () => {
  const t = useTranslations("home.techStack");

  return (
    <Container id={SECTIONS.TECH_STACK} title={t("Tech stack")}>
      <div className="flex flex-col gap-20">
        <ProgrammingLanguages />
        <FrontEnd />
        <BackEnd />
        <Mobile />
        <Databases />
        <Cloud />
        <DevOps />
        <DevelopmentEnvironment />
        <Agile />
      </div>
    </Container>
  );
};

export { TechStack };
