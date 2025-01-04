import { useTranslations } from "next-intl";

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
        <NameGenius />
        <NightlyTunes />
        <MIProjectManager />
      </div>
    </Container>
  );
};

export { Projects };
