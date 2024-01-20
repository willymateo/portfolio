import { GitlabFull, Bitbucket, Github, Linux, Book } from "iconoir-react";
import { faGit, faJira } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebDevelopmentEnvironment = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Web development</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faGit} className="w-[24px] h-[24px]" />
        <p>Git</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <Github />
        <p>Github</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <GitlabFull />
        <p>GitLab</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <Bitbucket />
        <p>Bitbucket</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />
        <p>Jira</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <Linux />
        <p>Linux</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <Book />
        <p>Notion</p>
      </div>
    </div>
  </div>
);

export { WebDevelopmentEnvironment };
