import { WebDevelopmentEnvironment } from "./Sections/WebDevelopmentEnvironment";
import { ProgrammingLanguages } from "./Sections/ProgrammingLanguages";
import { Databases } from "./Sections/DataBases";
import { FrontEnd } from "./Sections/FrontEnd";
import { BackEnd } from "./Sections/BackEnd";
import { Mobile } from "./Sections/Mobile";

const TechStack = () => (
  <div className="flex flex-col gap-5">
    <h2 className="text-4xl font-bold">Tech stack</h2>

    <div className="flex flex-col gap-5">
      <ProgrammingLanguages />
      <FrontEnd />
      <BackEnd />
      <Databases />
      <Mobile />
      <WebDevelopmentEnvironment />
    </div>
  </div>
);

export { TechStack };
