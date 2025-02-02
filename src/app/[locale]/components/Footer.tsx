import { useTranslations } from "next-intl";

import { DotLottie } from "../shared/DotLottie";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="flex flex-row items-center justify-center bg-darkosPortfolio-black dark:bg-black text-white text-sm sm:text-base px-10 py-5 sticky bottom-0 z-[9999]">
      <div className="text-center leading-9">
        {t("Designed and developed with")}

        <div className="inline-block w-[100px] h-3 relative">
          <DotLottie
            className="absolute bottom-[-5px] left-[-50%] w-[190px]"
            renderConfig={{ freezeOnOffscreen: true }}
            src="animations/hearth.lottie"
            autoplay
            loop
          />
        </div>

        {t("by")}

        <span className="font-bold ml-2">Willy Mateo</span>
      </div>
    </footer>
  );
};

export { Footer };
