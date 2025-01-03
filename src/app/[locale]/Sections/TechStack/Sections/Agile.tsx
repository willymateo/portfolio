import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { Technologies } from "@/app/[locale]/shared/Technologies";

const Agile = () => {
  const t = useTranslations("home.techStack");

  const technologies = [
    {
      name: "Scrum",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Kanban",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
  ];

  return <Technologies title={t("Agile")} technologies={technologies} />;
};

export { Agile };
