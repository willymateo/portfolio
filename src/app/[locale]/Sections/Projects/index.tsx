import { useTranslations } from "next-intl";

import { CherryShopLanding } from "./Cards/CherryShopLanding";
import { MIProjectManager } from "./Cards/MIProjectManager";
import { NightlyTunes } from "./Cards/NightlyTunes";
import { NameGenius } from "./Cards/NameGenius";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const Projects = () => {
  const t = useTranslations("home.projects");

  return (
    <Container id={SECTIONS.PROJECTS} title={t("Projects")}>
      <div className="flex flex-col gap-20">
        <CherryShopLanding />
        <NameGenius />
        <NightlyTunes />
        <MIProjectManager />
      </div>
    </Container>
  );
};

export { Projects };
