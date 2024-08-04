import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

import { Technologies } from "@/app/shared/Technologies";
import { Tag } from "@/app/shared/Tag";

const Cloud = () => (
  <Technologies title="Cloud">
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">AWS</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
      <p className="text-center">Firebase</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
      <p className="text-center">Vercel</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
      <p className="text-center">Railway</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faCloud} className="w-[24px] h-[24px]" />
      <p className="text-center">Netlify</p>
    </Tag>
  </Technologies>
);

export { Cloud };
