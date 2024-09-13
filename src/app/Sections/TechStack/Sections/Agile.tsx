import { Agile as AgileIcon } from "iconoir-react";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Agile = () => (
  <Technologies title="Agile">
    <Tag>
      <AgileIcon />

      <p className="text-center">Scrum</p>
    </Tag>

    <Tag>
      <AgileIcon />

      <p className="text-center">Kanban</p>
    </Tag>
  </Technologies>
);

export { Agile };
