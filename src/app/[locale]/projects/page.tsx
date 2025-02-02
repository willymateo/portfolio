import { useTranslations } from "next-intl";

import { CherryShopLanding } from "./Cards/CherryShopLanding";
import { MIProjectManager } from "./Cards/MIProjectManager";
import { NightlyTunes } from "./Cards/NightlyTunes";
import { RushMessage } from "./Cards/RushMessage";
import { Container } from "../Sections/Container";
import { NameGenius } from "./Cards/NameGenius";
import { Bizprofy } from "./Cards/Bizprofy";
import { Titi } from "./Cards/titi";

const Projects = () => {
  const t = useTranslations("projects");

  return (
    <Container id="projects" title={t("Projects")}>
      <div className="flex flex-col gap-48">
        <CherryShopLanding />
        <RushMessage />
        <Bizprofy />
        <NameGenius />
        <NightlyTunes />
        <MIProjectManager />
        <Titi />
      </div>
    </Container>
  );
};

export default Projects;
