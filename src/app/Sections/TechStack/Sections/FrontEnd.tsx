import { faCss3, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Html5, Css3 } from "iconoir-react";

const FrontEnd = () => (
  <div className="flex flex-col flex-wrap gap-3">
    <h3 className="text-2xl">Front-end</h3>

    <div className="flex flex-row flex-wrap gap-x-10 gap-y-3">
      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Html5 />
        <p className="text-center">HTML-5</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <Css3 />
        <p className="text-center">CSS 3</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faSass} className="w-[24px] h-[24px]" />
        <p className="text-center">Sass</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faCss3} className="w-[24px] h-[24px]" />
        <p className="text-center">Tailwind CSS</p>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap gap-3">
        <FontAwesomeIcon icon={faReact} className="w-[24px] h-[24px]" />
        <p className="text-center">React Js</p>
      </div>
    </div>
  </div>
);

export { FrontEnd };
