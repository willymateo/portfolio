"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

import { MotionH2 } from "../../shared/Motion/H2";
import { COMMUNITY_MOMENTS } from "./constants";
import { CommunityMoment } from "./types";

type Props = {
  className?: string;
};

const CommunityMomentsSelector = ({ className = "" }: Props) => {
  const [selectedCommunityMoment, setSelectedCommunityMoment] = useState<CommunityMoment>(
    COMMUNITY_MOMENTS[0],
  );
  const t = useTranslations();

  return (
    <div className={`lg:flex-row lg:justify-center ${className}`}>
      <Image
        className={`object-cover w-[700px] h-[700px] aspect-square ${selectedCommunityMoment?.className ?? ""}`}
        src={selectedCommunityMoment.imageSrc}
        alt={t(selectedCommunityMoment.alt)}
        height={700}
        width={700}
      />

      <div className="w-[400px] flex flex-col items-end justify-between gap-10 p-10 bg-darkosPortfolio-gray dark:bg-darkosPortfolio-black">
        <MotionH2
          transition={{ delay: 0.1, duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          className="text-3xl"
        >
          {t("Moments in the Tech Community")}
        </MotionH2>

        <ul className="flex flex-col items-start justify-center w-full">
          {COMMUNITY_MOMENTS.map(communityMoment => {
            const selectCommunityMoment = () => setSelectedCommunityMoment(communityMoment);

            return (
              <li
                className={`w-full px-5 py-2 cursor-pointer hover:bg-darkosPortfolio-gray-50 ${selectedCommunityMoment.id === communityMoment.id ? "font-bold bg-darkosPortfolio-gray-50" : ""}`}
                onMouseEnter={selectCommunityMoment}
                onClick={selectCommunityMoment}
                key={communityMoment.id}
              >
                {t(communityMoment.name)}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { CommunityMomentsSelector };
