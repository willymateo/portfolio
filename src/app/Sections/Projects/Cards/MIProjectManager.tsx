import { faCss3, faReact, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LaptopDevMode } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";
import { Card } from "./Card";

const MIProjectManager = () => (
  <Card
    description="This is an ESPOL thesis project management system. It allows clients to register their thesis project proposals, professors to manage and evaluate them, and coordinators to balance project proposals across existing courses. It also has a dashboard so that clients and teachers can monitor the progress of projects."
    websiteUrl="https://idear.espol.edu.ec/sites/default/files/posters/edicion_x/TECH_350_Desarrollo%20de%20una%20versi%C3%B3n%20mejorada%20del%20m%C3%B3dulo%20de%20gesti%C3%B3n%20de%20proyectos%20de%20materia%20integradora%20de%20la%20ESPOL.pdf"
    imgAlt="System for managing thesis projects of ESPOL"
    title="System for managing ESPOL thesis projects"
    imgUrl="/images/mi-project-manager-banner.png">
    <Technologies>
      <Tag>
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">Redux</p>
      </Tag>
      <Tag>
        <LaptopDevMode />
        <p className="text-center">Vite</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
        <p className="text-center">JavaScript</p>
      </Tag>
      <Tag>
        <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
        <p className="text-center">Tailwind CSS</p>
      </Tag>
    </Technologies>
  </Card>
);

export { MIProjectManager };
