import { faPython, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProgrammingLanguages = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Programming Languages</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p className="text-center">JavaScript</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p className="text-center">TypeScript</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faPython} className="w-[24px] h-[24px]" />
        <p className="text-center">Python</p>
      </div>
    </div>
  </div>
);

export { ProgrammingLanguages };
