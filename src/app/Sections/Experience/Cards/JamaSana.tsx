import { faArrowsSpin } from "@fortawesome/free-solid-svg-icons/faArrowsSpin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";

import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { React as ReactIcon } from "@/app/shared/Icons/React";
import { ReactRouter } from "@/app/shared/Icons/ReactRouter";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { Python } from "@/app/shared/Icons/Python";
import { Django } from "@/app/shared/Icons/Django";
import { NodeJs } from "@/app/shared/Icons/NodeJs";
import { SQLite } from "@/app/shared/Icons/SQLite";
import { Github } from "@/app/shared/Icons/Github";
import { Linux } from "@/app/shared/Icons/Linux";
import { Jest } from "@/app/shared/Icons/Jest";
import { Sass } from "@/app/shared/Icons/Sass";
import { Git } from "@/app/shared/Icons/Git";
import { Card } from "./Card";

const JamaSana = () => {
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
      enterpriseImgUrl="/images/jama-sana-logo.png"
      startDate={new Date(2021, 9, 1)}
      jobTitle="Fullstack Developer"
      endDate={new Date(2022, 7, 1)}
      enterpriseName="JamaSana"
    >
      <p>
        I played a key role in developing version 2 of an application dedicated to the buying and
        selling of health food. The primary challenge was to enhance user experience by implementing
        new features and improving existing functionalities. To address this, I implemented password
        recovery for user accounts and developed flows for registering customer allergies, which
        personalized the shopping experience. I also created functionalities for editing customer
        and seller information and added form validations in the sign-up forms to ensure data
        integrity. On the backend, I maintained and updated the RESTful API using Django and updated
        the database schema with SQLite to accommodate new features. I utilized React and Redux for
        frontend development, ensuring a responsive and intuitive user interface. Node.js was used
        for server-side operations, and I leveraged GitHub for version control, GitHub Actions for
        continuous integration, and deployed the system using Railway. Rigorous testing of the
        entire system ensured a robust and user-friendly application. This project showcased my
        ability to solve complex problems using a full stack of technologies, including React,
        Redux, Node.js, Django, SQLite, JavaScript, and RESTful APIs.
      </p>

      <Technologies technologies={technologies} />
    </Card>
  );
};

export { JamaSana };
