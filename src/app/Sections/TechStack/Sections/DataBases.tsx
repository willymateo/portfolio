import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Databases = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Databases</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p>MySQL</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p>PostgreSQL</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p>Mongo DB</p>
      </div>
    </div>
  </div>
);

export { Databases };
