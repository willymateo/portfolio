import { useTranslations } from "next-intl";

import { SECTIONS } from "@/app/[locale]/constants";
import { ShippifyInc } from "./Cards/ShippifyInc";
import { JamaSana } from "./Cards/JamaSana";
import { Container } from "../Container";
import { SASF } from "./Cards/SASF";

const Experience = () => {
  const t = useTranslations("home.experience");

  return (
    <Container id={SECTIONS.EXPERIENCE} title={t("Experience")}>
      <div className="flex flex-col gap-20">
        <ShippifyInc />
        <SASF />
        <JamaSana />
      </div>
    </Container>
  );
};

export { Experience };
