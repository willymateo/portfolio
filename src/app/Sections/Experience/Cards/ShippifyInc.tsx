import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { faCloud, faServer } from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons/faJira";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Express as ExpressIcon } from "@/app/shared/Icons/Express";
import { ElasticSearch } from "@/app/shared/Icons/ElasticSearch";
import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { ReactRouter } from "@/app/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { Technologies } from "@/app/shared/Technologies";
import { Firebase } from "@/app/shared/Icons/Firebase";
import { I18next } from "@/app/shared/Icons/I18next";
import { NodeJs } from "@/app/shared/Icons/NodeJs";
import { Docker } from "@/app/shared/Icons/Docker";
import { Github } from "@/app/shared/Icons/Github";
import { MySQL } from "@/app/shared/Icons/MySQL";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { Linux } from "@/app/shared/Icons/Linux";
import { Jest } from "@/app/shared/Icons/Jest";
import { Sass } from "@/app/shared/Icons/Sass";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Git } from "@/app/shared/Icons/Git";
import { AWS } from "@/app/shared/Icons/AWS";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const ShippifyInc = () => (
  <Card
    enterpriseImgUrl="/images/shippify-logo.svg"
    enterpriseWebUrl="https://www.shippify.co"
    enterpriseImgAlt="Shippify Inc logo"
    startDate={new Date(2022, 8, 20)}
    enterpriseName="Shippify Inc"
    jobTitle="Fullstack Engineer"
  >
    <p>
      I contributed to a wide range of impactful projects, showcasing my full-stack expertise. For
      instance: I rebuilt the entire version 3 of the company's landing page, adding dynamic
      animations with CSS, improving SEO through server-side rendering using Express.js, and
      ensuring the site was multi-language with i18next. I also developed the 'Permissions Manager'
      , where I designed a shared React component to manage user and company permissions,
      significantly reducing manual requests for permission changes. Another major project was
      enhancing the delivery location manager, where I improved the user experience by displaying
      real-time location updates on a Mapbox-powered map, allowing operators to make precise
      location adjustments with ease. Furthermore, I played a pivotal role in the 'Driver Payments
      V2' project, starting with the frontend and later taking on backend responsibilities,
      utilizing AWS Lambda, Terraform, and Elasticsearch to optimize data retrieval performance. In
      every project, I worked closely with cross-functional teams, integrating solutions that not
      only improved system efficiency but also reduced operational overhead, helping Shippify scale
      its services more effectively.
    </p>

    <Technologies>
      <Tag>
        <JavaScript />

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <TypeScript />

        <p className="text-center">TypeScript</p>
      </Tag>

      <Tag>
        <ReactIcon />

        <p className="text-center">React</p>
      </Tag>

      <Tag>
        <ReduxIcon />

        <p className="text-center">Redux</p>
      </Tag>

      <Tag>
        <ReactRouter />

        <p className="text-center">React Router</p>
      </Tag>

      <Tag>
        <Jest />

        <p className="text-center">Jest</p>
      </Tag>

      <Tag>
        <ReactIcon />

        <p className="text-center">React testing library</p>
      </Tag>

      <Tag>
        <Sass />

        <p className="text-center">Sass</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />

        <p className="text-center">SSR</p>
      </Tag>

      <Tag>
        <NodeJs />

        <p className="text-center">Node Js</p>
      </Tag>

      <Tag>
        <ExpressIcon />

        <p className="text-center">Express</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />
        <p className="text-center">REST APIs</p>
      </Tag>

      <Tag>
        <MySQL />

        <p className="text-center">MySQL</p>
      </Tag>

      <Tag>
        <Firebase />

        <p className="text-center">Firebase</p>
      </Tag>

      <Tag>
        <AWS />

        <p className="text-center">AWS</p>
      </Tag>

      <Tag>
        <ElasticSearch />

        <p className="text-center">Elasticsearch</p>
      </Tag>

      <Tag>
        <Docker />

        <p className="text-center">Docker</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />

        <p className="text-center">Terraform</p>
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
        <I18next />

        <p className="text-center">i18next</p>
      </Tag>

      <Tag>
        <Linux />

        <p className="text-center">Linux</p>
      </Tag>

      <Tag>
        <Git />

        <p className="text-center">Git</p>
      </Tag>

      <Tag>
        <Github />

        <p className="text-center">Github</p>
      </Tag>

      <Tag>
        <Github />

        <p className="text-center">Github Actions</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" />

        <p className="text-center">Jira</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />

        <p className="text-center">Scrum</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />

        <p className="text-center">Kanban</p>
      </Tag>
    </Technologies>
  </Card>
);

export { ShippifyInc };
