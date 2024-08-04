import { faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { Database } from "iconoir-react";

import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const ACTIVITIES = [
  "Developing the version 2 of an application that consists in buy-sale of health food.",
  "Maintaining the API RestFul using Django.",
  "Testing the whole system.",
  "Using Github Actions for CI and Railway to deploy the system.",
  "Updating the DB squeme.",
];

const ContabillySA = () => (
  <Card
    startDate={new Date(2021, 9, 1)}
    jobTitle="Full-stack developer"
    enterpriseName="Contabilly S.A."
    endDate={new Date(2022, 7, 1)}
    activities={ACTIVITIES}>
    <Tag>
      <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
      <p className="text-center">JavaScript</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
      <p className="text-center">React</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
      <p className="text-center">REST APIs</p>
    </Tag>
    <Tag>
      <Database />
      <p className="text-center">SQLite3</p>
    </Tag>
  </Card>
);

export { ContabillySA };
