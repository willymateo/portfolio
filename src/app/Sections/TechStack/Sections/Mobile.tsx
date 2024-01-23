import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Mobile = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Mobile</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p>React Native</p>
      </div>
    </div>
  </div>
);

export { Mobile };
