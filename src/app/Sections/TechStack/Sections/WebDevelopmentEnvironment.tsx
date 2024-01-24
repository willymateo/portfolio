import { GitlabFull, Bitbucket, Github, Linux, Book } from "iconoir-react";
import { faGit, faJira } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WebDevelopmentEnvironment = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Web development environment</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Linux />
        <p className="text-center">Linux</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faGit} className="w-[24px] h-[24px]" />
        <p className="text-center">Git</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Github />
        <p className="text-center">Github</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <GitlabFull />
        <p className="text-center">GitLab</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Bitbucket />
        <p className="text-center">Bitbucket</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />
        <p className="text-center">Jira</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Book />
        <p className="text-center">Notion</p>
      </div>
    </div>
  </div>
);

export { WebDevelopmentEnvironment };
