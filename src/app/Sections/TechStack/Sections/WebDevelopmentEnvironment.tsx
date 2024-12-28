import { faBitbucket } from "@fortawesome/free-brands-svg-icons/faBitbucket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Github } from "@/app/shared/Icons/Github";
import { GitLab } from "@/app/shared/Icons/GitLab";
import { Notion } from "@/app/shared/Icons/Notion";
import { Linux } from "@/app/shared/Icons/Linux";
import { Git } from "@/app/shared/Icons/Git";
import { Tag } from "@/app/shared/Tag";

const WebDevelopmentEnvironment = () => (
  <Technologies title="Web development environment">
    <Tag>
      <Linux />

      <p className="text-center">Linux</p>
    </Tag>

    <Tag>
      <Git />

      <p className="text-center">Git</p>
    </Tag>

    <Tag>
      <Github />

      <p className="text-center">Github</p>
    </Tag>

    <Tag>
      <GitLab />

      <p className="text-center">GitLab</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faBitbucket} className="w-[24px] h-[24px]" />

      <p className="text-center">Bitbucket</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />
      <p className="text-center">Jira</p>
    </Tag>

    <Tag>
      <Notion />

      <p className="text-center">Notion</p>
    </Tag>
  </Technologies>
);

export { WebDevelopmentEnvironment };
