import { faBitbucket } from "@fortawesome/free-brands-svg-icons/faBitbucket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Github } from "@/app/shared/Icons/Github";
import { GitLab } from "@/app/shared/Icons/GitLab";
import { Notion } from "@/app/shared/Icons/Notion";
import { Linux } from "@/app/shared/Icons/Linux";
import { Git } from "@/app/shared/Icons/Git";

const WebDevelopmentEnvironment = () => {
  const technologies = [
    {
      name: "Linux",
      Icon: Linux,
    },
    {
      name: "Git",
      Icon: Git,
    },
    {
      name: "Github",
      Icon: Github,
    },
    {
      name: "GitLab",
      Icon: GitLab,
    },
    {
      name: "Bitbucket",
      Icon: () => <FontAwesomeIcon icon={faBitbucket} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Jira",
      Icon: () => <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Notion",
      Icon: Notion,
    },
  ];

  return <Technologies title="Web development environment" technologies={technologies} />;
};

export { WebDevelopmentEnvironment };
