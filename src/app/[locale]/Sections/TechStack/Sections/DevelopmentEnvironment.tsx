import { faBitbucket } from "@fortawesome/free-brands-svg-icons/faBitbucket";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJira } from "@fortawesome/free-brands-svg-icons";
import { useTranslations } from "next-intl";

import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { GitLab } from "@/app/[locale]/shared/Icons/GitLab";
import { Notion } from "@/app/[locale]/shared/Icons/Notion";
import { Linux } from "@/app/[locale]/shared/Icons/Linux";
import { Git } from "@/app/[locale]/shared/Icons/Git";

const DevelopmentEnvironment = () => {
  const t = useTranslations("home.techStack");

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

  return <Technologies title={t("Development environment")} technologies={technologies} />;
};

export { DevelopmentEnvironment };
