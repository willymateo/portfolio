import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Agile = () => (
  <Technologies title="Agile">
    <Tag>
      <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />

      <p className="text-center">Scrum</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />

      <p className="text-center">Kanban</p>
    </Tag>
  </Technologies>
);

export { Agile };
