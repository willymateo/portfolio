import { useTranslations } from "next-intl";

import { SECTIONS } from "@/app/[locale]/constants";
import { Container } from "../Container";
import { ESPOL } from "./Cards/ESPOL";
import { CSB } from "./Cards/CSB";

const Education = () => {
  const t = useTranslations("home.education");

  return (
    <Container id={SECTIONS.EDUCATION} title={t("Education")}>
      <div className="flex flex-col gap-20">
        <ESPOL />

        <CSB />
      </div>
    </Container>
  );
};

export { Education };
