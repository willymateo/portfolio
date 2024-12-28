import { React as ReactIcon } from "@/app/shared/Icons/React";
import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Mobile = () => (
  <Technologies title="Mobile">
    <Tag>
      <ReactIcon />

      <p className="text-center">React Native</p>
    </Tag>
  </Technologies>
);

export { Mobile };
