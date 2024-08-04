import { faDocker, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const DevOps = () => (
  <Technologies title="DevOps">
    <Tag>
      <FontAwesomeIcon icon={faDocker} className="w-[24px] h-[24px]" />
      <p className="text-center">Docker</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
      <p className="text-center">Terraform</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px]" />
      <p className="text-center">Github Actions</p>
    </Tag>
  </Technologies>
);

export { DevOps };
