import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { SocialNetworkIconContainer } from "../Motion/SocialNetworkIconContainer";
import { SOCIAL_NETWORK_LINKS } from "./constants";
import { Link } from "@/i18n/routing";

const SocialNetworks = () => (
  <ul className="flex flex-row items-center justify-center flex-wrap gap-x-10 gap-y-3">
    <Link href={SOCIAL_NETWORK_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
      <SocialNetworkIconContainer
        transition={{
          delay: 0.1,
        }}
      >
        <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px]" />
      </SocialNetworkIconContainer>
    </Link>

    <Link href={SOCIAL_NETWORK_LINKS.GITHUB} target="_blank" rel="noreferrer">
      <SocialNetworkIconContainer
        transition={{
          delay: 0.2,
        }}
      >
        <FontAwesomeIcon icon={faGithub} className="w-[24px] h-[24px]" />
      </SocialNetworkIconContainer>
    </Link>

    <Link href={`mailto:${SOCIAL_NETWORK_LINKS.EMAIL}`} target="_blank" rel="noreferrer">
      <SocialNetworkIconContainer
        transition={{
          delay: 0.3,
        }}
      >
        <FontAwesomeIcon icon={faEnvelope} className="w-[24px] h-[24px]" />
      </SocialNetworkIconContainer>
    </Link>
  </ul>
);

export { SocialNetworks };
