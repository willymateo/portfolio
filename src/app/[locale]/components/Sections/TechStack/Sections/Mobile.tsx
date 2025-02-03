import { useTranslations } from "next-intl";

import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Expo } from "@/app/[locale]/shared/Icons/Expo";

const Mobile = () => {
  const t = useTranslations("home.techStack");

  const technologies = [
    {
      name: "React Native",
      Icon: ReactIcon,
    },
    {
      name: "Expo",
      Icon: Expo,
    },
  ];

  return <Technologies title={t("Mobile")} technologies={technologies} />;
};

export { Mobile };
