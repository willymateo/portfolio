import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faAws } from "@fortawesome/free-brands-svg-icons";

import { Tag } from "@/app/shared/Tag";
import { Section } from "./Section";

const DevOps = () => (
  <Section title="DevOps">
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">EC2 in AWS</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">S3 in AWS</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">RDS in AWS</p>
    </Tag>
    <Tag>
      <FontAwesomeIcon icon={faAws} className="w-[24px] h-[24px]" />
      <p className="text-center">CloudWatch in AWS</p>
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
  </Section>
);

export { DevOps };
