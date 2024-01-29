import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Mobile = () => (
  <Technologies title="Mobile">
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React Native</p>
    </Tag>
  </Technologies>
);

export { Mobile };
