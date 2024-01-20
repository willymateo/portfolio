import { faPython, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgrammingLanguages = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Programming Languages</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p>JavaScript</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p>TypeScript</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faPython} className="w-[24px] h-[24px]" />
        <p>Python</p>
      </div>
    </div>
  </div>
);

export { ProgrammingLanguages };
