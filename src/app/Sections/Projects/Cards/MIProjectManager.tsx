import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/shared/Icons/Redux";
import { TailwindCss } from "@/app/shared/Icons/TailwindCss";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { GitLab } from "@/app/shared/Icons/GitLab";
import { HTML5 } from "@/app/shared/Icons/HTML5";
import { CSS3 } from "@/app/shared/Icons/CSS3";
import { Vite } from "@/app/shared/Icons/Vite";
import { Git } from "@/app/shared/Icons/Git";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const MIProjectManager = () => (
  <Card
    description="This project was designed to streamline the process of handling thesis proposals and evaluations. It addresses the challenge of coordinating between students, professors, and course coordinators by allowing clients to submit proposals, professors to manage and evaluate them, and coordinators to distribute projects efficiently. This project enhances visibility and organization through a dashboard, simplifying the tracking and management of thesis progress. It was developed in collaboration with key stakeholders, demonstrating a comprehensive application of computer science engineering skills to solve real-world administrative problems."
    websiteUrl="https://idear.espol.edu.ec/sites/default/files/posters/edicion_x/TECH_350_Desarrollo%20de%20una%20versi%C3%B3n%20mejorada%20del%20m%C3%B3dulo%20de%20gesti%C3%B3n%20de%20proyectos%20de%20materia%20integradora%20de%20la%20ESPOL.pdf"
    imgAlt="System for managing thesis projects of ESPOL"
    title="System for managing ESPOL thesis projects"
    imgUrl="/images/mi-project-manager-banner.png"
  >
    <Technologies>
      <Tag>
        <JavaScript />

        <p className="text-center">JavaScript</p>
      </Tag>

      <Tag>
        <ReactIcon />

        <p className="text-center">React</p>
      </Tag>

      <Tag>
        <Vite />

        <p className="text-center">Vite</p>
      </Tag>

      <Tag>
        <ReduxIcon />

        <p className="text-center">Redux</p>
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
        <TailwindCss />

        <p className="text-center">Tailwind CSS</p>
      </Tag>

      <Tag>
        <Git />

        <p className="text-center">Git</p>
      </Tag>

      <Tag>
        <GitLab />

        <p className="text-center">GitLab</p>
      </Tag>
    </Technologies>
  </Card>
);

export { MIProjectManager };
