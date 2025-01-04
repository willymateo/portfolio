import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialNetworkIconContainer } from "./Motion/SocialNetworkIconContainer";
import { EMAIL } from "@/shared/constants";
import { Link } from "@/i18n/routing";

const SocialNetworks = () => (
  <ul className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3">
    <SocialNetworkIconContainer
      transition={{
        delay: 0.1,
      }}
    >
      <Link href="https://www.linkedin.com/in/willymateo/" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px]" />
      </Link>
    </SocialNetworkIconContainer>

    <SocialNetworkIconContainer
      transition={{
        delay: 0.2,
      }}
    >
      <Link href="https://github.com/willymateo" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px]" />
      </Link>
    </SocialNetworkIconContainer>

    <SocialNetworkIconContainer
      transition={{
        delay: 0.3,
      }}
    >
      <Link href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px]" />
      </Link>
    </SocialNetworkIconContainer>
  </ul>
);

export { SocialNetworks };
