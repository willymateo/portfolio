import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const SASF = () => (
  <Card
    enterpriseImgAlt="Sudamericana de Software S.A logo"
    enterpriseName="Sudamericana de Software S.A"
    enterpriseImgUrl="/images/sasf-logo.jpg"
    enterpriseWebUrl="https://www.sasf.net"
    startDate={new Date(2022, 1, 1)}
    endDate={new Date(2022, 7, 1)}
    jobTitle="Fullstack Developer"
  >
    <p>
      I maintained a CRM system and web service for Huawei, ensuring seamless functionality for
      their enterprise needs. A key aspect of my role was using PSQL to create SQL scripts that
      migrated data from old to new tables, while ensuring data integrity by avoiding duplication
      and ambiguous entries. I also worked with microservices and orchestration services to
      streamline operations for both Claro and Huawei. Throughout the project, I utilized
      technologies like JavaScript, HTML, CSS, and SCSS to enhance the system's interface and
      performance.
    </p>

    <Technologies>
      <Tag>
        <JavaScript />

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <HTML5 />

        <p className="text-center">HTML-5</p>
      </Tag>

      <Tag>
        <CSS3 />

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

      <Tag>
        <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />

        <p className="text-center">SSR</p>
      </Tag>
    </Technologies>
  </Card>
);

export { SASF };
