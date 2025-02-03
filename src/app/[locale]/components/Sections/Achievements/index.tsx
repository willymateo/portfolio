import { useTranslations } from "next-intl";

import { GithubFoundationsCertification } from "./Cards/GithubFoundationsCertification";
import { ScientificMerit } from "./Cards/ScientificMerit";
import { SECTIONS } from "@/app/[locale]/constants";
import { PaperRAP } from "./Cards/PaperRAP";
import { Container } from "../Container";

const Achievements = () => {
  const t = useTranslations("home.achievements");

  return (
    <Container id={SECTIONS.ACHIEVEMENTS} title={t("Achievements")}>
      <div className="flex flex-col gap-20">
        <GithubFoundationsCertification />

        <PaperRAP />

        <ScientificMerit />
      </div>
    </Container>
  );
};

export { Achievements };
