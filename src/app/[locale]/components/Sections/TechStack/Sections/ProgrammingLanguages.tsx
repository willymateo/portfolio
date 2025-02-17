import { useTranslations } from "next-intl";

import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Python } from "@/app/[locale]/shared/Icons/Python";

const ProgrammingLanguages = () => {
  const t = useTranslations("home.techStack");

  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "TypeScript", Icon: TypeScript },
    { name: "Python", Icon: Python },
  ];

  return <Technologies title={t("Programming languages")} technologies={technologies} />;
};

export { ProgrammingLanguages };
