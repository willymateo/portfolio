import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { Css3, Html5 } from "iconoir-react";

import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const ACTIVITIES = [
  "Maintaining a CRM system and web-service to Huawei enterprise.",
  "Using PSQL to create SQL scripts in Oracle database.",
  "Working with micro-services and orquestation services to Claro and Huawei enterprises.",
];

const SASF = () => (
  <Card
    enterpriseImgAlt="Sudamericana de Software S.A logo"
    enterpriseName="Sudamericana de Software S.A"
    enterpriseImgUrl="/images/sasf-logo.jpg"
    enterpriseWebUrl="https://www.sasf.net"
    jobTitle="Full-stack developer intern"
    startDate={new Date(2022, 1, 1)}
    endDate={new Date(2022, 7, 1)}
    activities={ACTIVITIES}>
    <Tag>
      <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
      <p className="text-center">JavaScript</p>
    </Tag>
    <Tag>
      <Html5 />
      <p className="text-center">HTML-5</p>
    </Tag>
    <Tag>
      <Css3 />
      <p className="text-center">CSS 3</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">Oracle</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />
      <p className="text-center">PL/SQL</p>
    </Tag>
  </Card>
);

export { SASF };
