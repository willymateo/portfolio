import { faAws, faNode, faNodeJs, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const ACTIVITIES = [
  "Developing and maintaining the company's website.",
  "Developing and maintaining modules within the dashboard system to ensure functionality and performance standards are met.",
  "Contributing to the creation and maintenance of RESTful APIs, adhering to best practices for robust and scalable communication between systems.",
  "Playing a pivotal role in the automation module by designing, implementing, and maintaining system actions triggered by user interactions, enhancing efficiency and user experience.",
];

const ShippifyInc = () => (
  <Card
    enterpriseImgUrl="/images/shippify-logo.svg"
    enterpriseWebUrl="https://www.shippify.co"
    enterpriseImgAlt="Shippify Inc logo"
    startDate={new Date(2022, 8, 20)}
    jobTitle="Full-stack developer"
    enterpriseName="Shippify Inc"
    activities={ACTIVITIES}>
    <Tag>
      <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
      <p className="text-center">JavaScript</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React Js</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNode} className="w-[24px] h-[24px]" />
      <p className="text-center">Node Js</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faNodeJs} className="w-[24px] h-[24px]" />
      <p className="text-center">Express Js</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
      <p className="text-center">REST APIs</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">MySQL</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">CloudWatch in AWS</p>
    </Tag>
  </Card>
);

export { ShippifyInc };
