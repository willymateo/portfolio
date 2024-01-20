import { faCss3, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html5, Css3 } from "iconoir-react";

const FrontEnd = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <p>Front-end</p>

    <div className="flex flex-row flex-wrap gap-10">
      <div className="flex flex-row flex-wrap gap-3">
        <Html5 />
        <p>HTML-5</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <Css3 />
        <p>CSS 3</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faSass} className="w-[24px] h-[24px]" />
        <p>Sass</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
        <p>Tailwind CSS</p>
      </div>

      <div className="flex flex-row flex-wrap gap-3">
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p>React Js</p>
      </div>
    </div>
  </div>
);

export { FrontEnd };
