import { GitlabFull, Bitbucket, Github, Linux, Book } from "iconoir-react";
import { faGit, faJira } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const WebDevelopmentEnvironment = () => (
  <Section title="Web development environment">
    <Tag>
      <Linux />
      <p className="text-center">Linux</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faGit} className="w-[24px] h-[24px]" />
      <p className="text-center">Git</p>
    </Tag>
    <Tag>
      <Github />
      <p className="text-center">Github</p>
    </Tag>
    <Tag>
      <GitlabFull />
      <p className="text-center">GitLab</p>
    </Tag>
    <Tag>
      <Bitbucket />
      <p className="text-center">Bitbucket</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />
      <p className="text-center">Jira</p>
    </Tag>
    <Tag>
      <Book />
      <p className="text-center">Notion</p>
    </Tag>
  </Section>
);

export { WebDevelopmentEnvironment };
