import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faDatabase } from "@fortawesome/free-solid-svg-icons/faDatabase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Card } from "./Card";

const SASF = () => {
  const technologies = [
    {
      name: "JavaScript",
      Icon: JavaScript,
    },
    {
      name: "HTML-5",
      Icon: HTML5,
    },
    {
      name: "CSS 3",
      Icon: CSS3,
    },
    {
      name: "Oracle",
      Icon: () => <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />,
    },
    {
      name: "PL/SQL",
      Icon: () => <FontAwesomeIcon icon={faDatabase} className="w-[24px] h-[24px]" />,
    },
    {
      name: "SSR",
      Icon: () => <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />,
    },
  ];

  return (
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

      <Technologies technologies={technologies} />
    </Card>
  );
};

export { SASF };
