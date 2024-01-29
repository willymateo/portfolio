import { faPython, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Code } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const ProgrammingLanguages = () => (
  <Technologies title="Programming Languages">
    <Tag>
      <FontAwesomeIcon icon={faSquareJs} className="w-[24px] h-[24px]" />
      <p className="text-center">JavaScript</p>
    </Tag>

    <Tag>
      <Code />
      <p className="text-center">TypeScript</p>
    </Tag>

    <Tag>
      <FontAwesomeIcon icon={faPython} className="w-[24px] h-[24px]" />
      <p className="text-center">Python</p>
    </Tag>
  </Technologies>
);

export { ProgrammingLanguages };
