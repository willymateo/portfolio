import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const Mobile = () => (
  <Section title="Mobile">
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React Native</p>
    </Tag>
  </Section>
);

export { Mobile };
