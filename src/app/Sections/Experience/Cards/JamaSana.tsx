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
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const JamaSana = () => (
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
      personalized the shopping experience. I also created functionalities for editing customer and
      seller information and added form validations in the sign-up forms to ensure data integrity.
      On the backend, I maintained and updated the RESTful API using Django and updated the database
      schema with SQLite to accommodate new features. I utilized React and Redux for frontend
      development, ensuring a responsive and intuitive user interface. Node.js was used for
      server-side operations, and I leveraged GitHub for version control, GitHub Actions for
      continuous integration, and deployed the system using Railway. Rigorous testing of the entire
      system ensured a robust and user-friendly application. This project showcased my ability to
      solve complex problems using a full stack of technologies, including React, Redux, Node.js,
      Django, SQLite, JavaScript, and RESTful APIs.
    </p>

    <Technologies>
      <Tag>
        <JavaScript />

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <Python />

        <p className="text-center">Python</p>
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
        <Django />

        <p className="text-center">Django</p>
      </Tag>

      <Tag>
        <NodeJs />

        <p className="text-center">Node Js</p>
      </Tag>

      <Tag>
        <FontAwesomeIcon icon={faServer} className="w-[24px] h-[24px]" />

        <p className="text-center">REST APIs</p>
      </Tag>

      <Tag>
        <SQLite />

        <p className="text-center">SQLite</p>
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
        <FontAwesomeIcon icon={faArrowsSpin} className="w-[24px] h-[24px]" />

        <p className="text-center">Scrum</p>
      </Tag>
    </Technologies>
  </Card>
);

export { JamaSana };
