import { TypeScript } from "@/app/shared/Icons/TypeScript";
import { JavaScript } from "@/app/shared/Icons/JavaScript";
import { Technologies } from "@/app/shared/Technologies";
import { Python } from "@/app/shared/Icons/Python";
import { Tag } from "@/app/shared/Tag";

const ProgrammingLanguages = () => (
  <Technologies title="Programming Languages">
    <Tag>
      <JavaScript />

      <p className="text-center">JavaScript</p>
    </Tag>

    <Tag>
      <TypeScript />

      <p className="text-center">TypeScript</p>
    </Tag>

    <Tag>
      <Python />

      <p className="text-center">Python</p>
    </Tag>
  </Technologies>
);

export { ProgrammingLanguages };
