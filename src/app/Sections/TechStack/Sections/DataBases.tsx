import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Databases = () => (
  <Technologies title="Databases">
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">MySQL</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">PostgreSQL</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">Mongo DB</p>
    </Tag>
  </Technologies>
);

export { Databases };
