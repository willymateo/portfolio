"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Image from "next/image";

import { MotionLi } from "../../shared/Motion/Li";
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

      <div className="w-[500px] flex flex-col items-end justify-between gap-10 p-10 bg-darkosPortfolio-gray dark:bg-darkosPortfolio-black">
        <MotionH2
          transition={{ delay: 0.1, duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 30 }}
          className="text-3xl text-right"
        >
          {t("Moments in the Tech Community")}
        </MotionH2>

        <ul className="flex flex-col items-start justify-center w-full">
          {COMMUNITY_MOMENTS.map((communityMoment, index) => {
            const selectCommunityMoment = () => setSelectedCommunityMoment(communityMoment);

            return (
              <MotionLi
                className={`w-full px-5 py-2 cursor-pointer hover:bg-darkosPortfolio-gray-50 hover:dark:bg-darkosPortfolio-gray-500 ${selectedCommunityMoment.id === communityMoment.id ? "font-bold bg-darkosPortfolio-gray-50 dark:bg-darkosPortfolio-gray-500" : ""}`}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.5 }}
                onMouseEnter={selectCommunityMoment}
                onClick={selectCommunityMoment}
                transition={{
                  ease: [0, 0.71, 0.2, 1.01],
                  delay: 0.1 + index * 0.1,
                  duration: 0.8,
                }}
                key={communityMoment.id}
              >
                {t(communityMoment.name)}
              </MotionLi>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export { CommunityMomentsSelector };
