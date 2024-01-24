import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";

const DevOps = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">DevOps</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
        <p className="text-center">EC2 in AWS</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
        <p className="text-center">S3 in AWS</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
        <p className="text-center">CloudWatch in AWS</p>
      </div>
    </div>
  </div>
);

export { DevOps };
