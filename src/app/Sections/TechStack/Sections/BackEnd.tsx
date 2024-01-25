import { faNode, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const BackEnd = () => (
  <Section title="Back-end">
    <Tag>
      <FontAwesomeIcon icon={faNode} className="w-[24px] h-[24px]" />
      <p className="text-center">Node Js</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNodeJs} className="w-[24px] h-[24px]" />
      <p className="text-center">Express Js</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
      <p className="text-center">REST APIs</p>
    </Tag>
  </Section>
);

export { BackEnd };
