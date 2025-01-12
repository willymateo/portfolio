import { useTranslations } from "next-intl";

import { GithubFoundationsCertification } from "./Cards/GithubFoundationsCertification";
import { PaperRAP } from "./Cards/PaperRAP";
import { Container } from "../Container";
import { SECTIONS } from "../constants";

const Achievements = () => {
  const t = useTranslations("home.achievements");

  return (
    <Container id={SECTIONS.ACHIEVEMENTS} title={t("Achievements")}>
      <div className="flex flex-col gap-20">
        <GithubFoundationsCertification />
        <PaperRAP />
      </div>
    </Container>
  );
};

export { Achievements };
