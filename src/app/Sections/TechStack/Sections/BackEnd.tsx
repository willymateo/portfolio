import { faNode, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const BackEnd = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Back-end</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faNode} className="w-[24px] h-[24px]" />
        <p>Node Js</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faNodeJs} className="w-[24px] h-[24px]" />
        <p>Express Js</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
        <p>REST APIs</p>
      </div>
    </div>
  </div>
);

export { BackEnd };
