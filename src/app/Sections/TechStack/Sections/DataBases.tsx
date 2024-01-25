import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const Databases = () => (
  <Section title="Databases">
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
  </Section>
);

export { Databases };
