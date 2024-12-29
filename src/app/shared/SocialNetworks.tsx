import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { EMAIL } from "@/shared/constants";
import { MotionLi } from "./Motion/Li";

interface Props {
  itemsClassName?: string;
}

const SocialNetworks = ({ itemsClassName = "" }: Props) => (
  <ul className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3">
    <MotionLi
      className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}
      transition={{
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        duration: 0.1,
        delay: 0.1,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <Link href="https://www.linkedin.com/in/willymateo/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px]" />
      </Link>
    </MotionLi>

    <MotionLi
      className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}
      transition={{
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        duration: 0.1,
        delay: 0.2,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <Link href="https://github.com/willymateo" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px]" />
      </Link>
    </MotionLi>

    <MotionLi
      className={`bg-black bg-opacity-20 rounded-full p-5 hover:shadow-2xl ${itemsClassName}`}
      transition={{
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        duration: 0.1,
        delay: 0.3,
      }}
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0 }}
    >
      <Link href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px]" />
      </Link>
    </MotionLi>
  </ul>
);

export { SocialNetworks };
