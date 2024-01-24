import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const Databases = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Databases</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p className="text-center">MySQL</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p className="text-center">PostgreSQL</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
        <p className="text-center">Mongo DB</p>
      </div>
    </div>
  </div>
);

export { Databases };
