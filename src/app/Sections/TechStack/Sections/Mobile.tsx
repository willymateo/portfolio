import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const Mobile = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Mobile</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React Native</p>
      </div>
    </div>
  </div>
);

export { Mobile };
