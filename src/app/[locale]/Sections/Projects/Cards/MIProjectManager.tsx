import { React as ReactIcon } from "@/app/[locale]/shared/Icons/React";
import { Redux as ReduxIcon } from "@/app/[locale]/shared/Icons/Redux";
import { TailwindCss } from "@/app/[locale]/shared/Icons/TailwindCss";
import { JavaScript } from "@/app/[locale]/shared/Icons/JavaScript";
import { Technologies } from "@/app/[locale]/shared/Technologies";
import { GitLab } from "@/app/[locale]/shared/Icons/GitLab";
import { HTML5 } from "@/app/[locale]/shared/Icons/HTML5";
import { CSS3 } from "@/app/[locale]/shared/Icons/CSS3";
import { Vite } from "@/app/[locale]/shared/Icons/Vite";
import { Git } from "@/app/[locale]/shared/Icons/Git";
import { Card } from "./Card";

const MIProjectManager = () => {
  const technologies = [
    { name: "JavaScript", Icon: JavaScript },
    { name: "React", Icon: ReactIcon },
    { name: "Vite", Icon: Vite },
    { name: "Redux", Icon: ReduxIcon },
    { name: "HTML-5", Icon: HTML5 },
    { name: "CSS 3", Icon: CSS3 },
    { name: "Tailwind CSS", Icon: TailwindCss },
    { name: "Git", Icon: Git },
    { name: "GitLab", Icon: GitLab },
  ];

  return (
    <Card
      description="This project was designed to streamline the process of handling thesis proposals and evaluations. It addresses the challenge of coordinating between students, professors, and course coordinators by allowing clients to submit proposals, professors to manage and evaluate them, and coordinators to distribute projects efficiently. This project enhances visibility and organization through a dashboard, simplifying the tracking and management of thesis progress. It was developed in collaboration with key stakeholders, demonstrating a comprehensive application of computer science engineering skills to solve real-world administrative problems."
      websiteUrl="https://idear.espol.edu.ec/sites/default/files/posters/edicion_x/TECH_350_Desarrollo%20de%20una%20versi%C3%B3n%20mejorada%20del%20m%C3%B3dulo%20de%20gesti%C3%B3n%20de%20proyectos%20de%20materia%20integradora%20de%20la%20ESPOL.pdf"
      imgAlt="System for managing thesis projects of ESPOL"
      title="System for managing ESPOL thesis projects"
      imgUrl="/images/mi-project-manager-banner.png"
    >
      <Technologies technologies={technologies} />
    </Card>
  );
};

export { MIProjectManager };
