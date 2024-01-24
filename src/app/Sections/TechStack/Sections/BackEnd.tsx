import { faNode, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const BackEnd = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Back-end</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faNode} className="w-[24px] h-[24px]" />
        <p className="text-center">Node Js</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faNodeJs} className="w-[24px] h-[24px]" />
        <p className="text-center">Express Js</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
        <p className="text-center">REST APIs</p>
      </div>
    </div>
  </div>
);

export { BackEnd };
