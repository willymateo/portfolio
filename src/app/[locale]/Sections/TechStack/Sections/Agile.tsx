import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Technologies } from "@/app/[locale]/shared/Technologies";

const Agile = () => {
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

  return <Technologies title="Agile" technologies={technologies} />;
};

export { Agile };
