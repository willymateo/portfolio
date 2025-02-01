import { useTranslations } from "next-intl";
import Image from "next/image";

import { SOCIAL_NETWORK_LINKS } from "../../shared/SocialNetworks/constants";
import { COMMUNITY_MOMENTS } from "./constants";
import { Link } from "@/i18n/routing";

type Props = {
  className?: string;
};

const CommunityMomentsSlider = ({ className = "" }: Props) => {
  const t = useTranslations("home.techCommunity");

  return (
    <div className={`flex-col w-full ${className}`}>
      <h2 className="text-2xl sm:text-3xl px-5 py-5 sm:py-10 bg-darkosPortfolio-gray">
        {t("Moments in the Tech Community")}
      </h2>

      <div className="flex list-none items-center gap-1 overflow-x-scroll">
        {COMMUNITY_MOMENTS.map(communityMoment => (
          <li
            className="flex-shrink-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] relative aspect-square"
            key={communityMoment.id}
          >
            <Image
              className="w-full h-full object-cover object-center"
              src={communityMoment.imageSrc}
              alt={t(communityMoment.alt)}
              height={400}
              width={400}
            />

            <Link
              className="text-xs sm:text-base text-center px-5 py-2 bg-darkosPortfolio-gray-50 bg-opacity-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              href={SOCIAL_NETWORK_LINKS.LINKEDIN}
              rel="noreferrer"
              target="_blank"
            >
              <h3>{t(communityMoment.name)}</h3>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export { CommunityMomentsSlider };
