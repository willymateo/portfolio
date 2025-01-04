import { useTranslations } from "next-intl";

import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Technologies } from "@/app/[locale]/shared/Technologies";

const Mobile = () => {
  const t = useTranslations("home.techStack");

  const technologies = [
    {
      name: "React Native",
      Icon: ReactIcon,
    },
  ];

  return <Technologies title={t("Mobile")} technologies={technologies} />;
};

export { Mobile };
