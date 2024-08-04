import { Database } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Databases = () => (
  <Technologies title="Databases">
    <Tag>
      <Database />
      <p className="text-center">MySQL</p>
    </Tag>
    <Tag>
      <Database />
      <p className="text-center">PostgreSQL</p>
    </Tag>
    <Tag>
      <Database />
      <p className="text-center">Mongo DB</p>
    </Tag>
    <Tag>
      <Database />
      <p className="text-center">Firestore</p>
    </Tag>
  </Technologies>
);

export { Databases };
