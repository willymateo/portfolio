import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";
import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { faCloud, faServer } from "@fortawesome/free-solid-svg-icons";
import { faJira } from "@fortawesome/free-brands-svg-icons/faJira";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

import { Express as ExpressIcon } from "@/app/[locale]/shared/Icons/Express";
import { ElasticSearch } from "@/app/[locale]/shared/Icons/ElasticSearch";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { ReactRouter } from "@/app/[locale]/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { TypeScript } from "@/app/[locale]/shared/Icons/TypeScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Firebase } from "@/app/[locale]/shared/Icons/Firebase";
import { NodeJs } from "@/app/[locale]/shared/Icons/NodeJs";
import { Docker } from "@/app/[locale]/shared/Icons/Docker";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { MySQL } from "@/app/[locale]/shared/Icons/MySQL";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { Linux } from "@/app/[locale]/shared/Icons/Linux";
import { Jest } from "@/app/[locale]/shared/Icons/Jest";
import { Sass } from "@/app/[locale]/shared/Icons/Sass";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { AWS } from "@/app/[locale]/shared/Icons/AWS";
import { NPM } from "@/app/[locale]/shared/Icons/NPM";
import { Card } from "./Card";

const ShippifyInc = () => {
  const t = useTranslations("home.experience.shippify");

  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "TypeScript", Icon: TypeScript },
    { name: "React", Icon: ReactIcon },
    { name: "Redux", Icon: ReduxIcon },
    { name: "React Router", Icon: ReactRouter },
    { name: "Jest", Icon: Jest },
    { name: "React testing library", Icon: ReactIcon },
    { name: "Sass", Icon: Sass },
    {
      name: "SSR",
      Icon: () => <FontAwesomeIcon icon={faLaptopCode} className="w-[24px] h-[24px]" />,
    },
    { name: "Node Js", Icon: NodeJs },
    { name: "Express", Icon: ExpressIcon },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    { name: "MySQL", Icon: MySQL },
    { name: "Firebase", Icon: Firebase },
    { name: "AWS", Icon: AWS },
    { name: "Elasticsearch", Icon: ElasticSearch },
    { name: "Docker", Icon: Docker },
    {
      name: "Terraform",
      Icon: () => <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />,
    },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "i18next", Icon: NPM },
    { name: "Rollup", Icon: NPM },
    { name: "Linux", Icon: Linux },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
    { name: "Github Actions", Icon: Github },
    { name: "Jira", Icon: () => <FontAwesomeIcon icon={faJira} className="w-[24px] h-[24px]" /> },
    {
      name: "Scrum",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
    {
      name: "Kanban",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
  ];

  return (
    <Card
      enterpriseImgUrl="/images/shippify-logo.svg"
      enterpriseWebUrl="https://www.shippify.co"
      enterpriseImgAlt="Shippify Inc logo"
      jobTitle={t("Fullstack Engineer")}
      startDate={new Date(2022, 8, 20)}
      enterpriseName="Shippify Inc"
    >
      <p>{`${t("I contributed to a wide range of impactful projects, showcasing my full-stack expertise For instance: I rebuilt the entire version 3 of the company's landing page, adding dynamic animations with CSS, improving SEO through server-side rendering using Expressjs, and ensuring the site was multi-language with i18next I also developed the 'Permissions Manager' , where I designed a shared React component to manage user and company permissions, significantly reducing manual requests for permission changes Another major project was enhancing the delivery location manager, where I improved the user experience by displaying real-time location updates on a Mapbox-powered map, allowing operators to make precise location adjustments with ease Furthermore, I played a pivotal role in the 'Driver Payments V2' project, starting with the frontend and later taking on backend responsibilities, utilizing AWS Lambda, Terraform, and Elasticsearch to optimize data retrieval performance In every project, I worked closely with cross-functional teams, integrating solutions that not only improved system efficiency but also reduced operational overhead, helping Shippify scale its services more effectively")}.`}</p>

      <Technologies technologies={technologies} />
    </Card>
  );
};

export { ShippifyInc };
