import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

import jamaSanaLogo from "@/../public/images/experience/jama-sana-logo.png";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { ReactRouter } from "@/app/[locale]/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { Python } from "@/app/[locale]/shared/Icons/Python";
import { Django } from "@/app/[locale]/shared/Icons/Django";
import { NodeJs } from "@/app/[locale]/shared/Icons/NodeJs";
import { SQLite } from "@/app/[locale]/shared/Icons/SQLite";
import { Github } from "@/app/[locale]/shared/Icons/Github";
import { Linux } from "@/app/[locale]/shared/Icons/Linux";
import { Jest } from "@/app/[locale]/shared/Icons/Jest";
import { Sass } from "@/app/[locale]/shared/Icons/Sass";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const JamaSana = () => {
  const t = useTranslations("home.experience.jamasana");

  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "Python", Icon: Python },
    { name: "React", Icon: ReactIcon },
    { name: "Redux", Icon: ReduxIcon },
    { name: "React Router", Icon: ReactRouter },
    { name: "Jest", Icon: Jest },
    { name: "React testing library", Icon: ReactIcon },
    { name: "Sass", Icon: Sass },
    { name: "Django", Icon: Django },
    { name: "Node Js", Icon: NodeJs },
    {
      name: "REST APIs",
      Icon: () => <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />,
    },
    { name: "SQLite", Icon: SQLite },
    { name: "Linux", Icon: Linux },
    { name: "Git", Icon: Git },
    { name: "Github", Icon: Github },
    { name: "Github Actions", Icon: Github },
    {
      name: "Scrum",
      Icon: () => <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />,
    },
  ];

  return (
    <Card
      enterpriseImgUrl={jamaSanaLogo.src}
      jobTitle={t("Fullstack Developer")}
      startDate={new Date(2021, 9, 1)}
      endDate={new Date(2022, 7, 1)}
      enterpriseName="JamaSana"
    >
      <p>{`${t("I played a key role in developing version 2 of an application dedicated to the buying and selling of health food The primary challenge was to enhance user experience by implementing new features and improving existing functionalities To address this, I implemented password recovery for user accounts and developed flows for registering customer allergies, which personalized the shopping experience I also created functionalities for editing customer and seller information and added form validations in the sign-up forms to ensure data integrity On the backend, I maintained and updated the RESTful API using Django and updated the database schema with SQLite to accommodate new features I utilized React and Redux for frontend development, ensuring a responsive and intuitive user interface Nodejs was used for server-side operations, and I leveraged GitHub for version control, GitHub Actions for continuous integration, and deployed the system using Railway Rigorous testing of the entire system ensured a robust and user-friendly application This project showcased my ability to solve complex problems using a full stack of technologies, including React, Redux, Nodejs, Django, SQLite, JavaScript, and RESTful APIs")}.`}</p>

      <Technologies technologies={technologies} />
    </Card>
  );
};

export { JamaSana };
