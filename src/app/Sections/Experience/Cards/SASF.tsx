import { Database, LaptopDevMode } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
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
    jobTitle="Fullstack Developer">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1052 1052">
          <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
          <path
            d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
            fill="#323330"
          />
        </svg>

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" width={24} height={24}>
          <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
          />
          <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
        </svg>

        <p className="text-center">HTML-5</p>
      </Tag>

      <Tag>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 520" height={24} width={24}>
          <path fill="#0c73b8" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#30a9dc" d="M226 472l149-41 35-394H226" />
          <path
            fill="#ecedee"
            d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z"
          />
          <path fill="#fff" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-6 58h-74z" />
        </svg>

        <p className="text-center">CSS 3</p>
      </Tag>

      <Tag>
        <Database />
        <p className="text-center">Oracle</p>
      </Tag>

      <Tag>
        <Database />
        <p className="text-center">PL/SQL</p>
      </Tag>

      <Tag>
        <LaptopDevMode />

        <p className="text-center">SSR</p>
      </Tag>
    </Technologies>
  </Card>
);

export { SASF };
