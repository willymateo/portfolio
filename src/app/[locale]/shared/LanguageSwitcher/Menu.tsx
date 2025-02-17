import { useLocale, useTranslations } from "next-intl";

import { MotionUl, MotionUlProps } from "@/app/[locale]/shared/Motion/Ul";
import { LANGUAGES_DATA_BY_CODE } from "@/i18n/constants";
import { Link, usePathname } from "@/i18n/routing";

type Props = MotionUlProps & {
  onChangeLocale: () => void;
};

const Menu = ({ className = "", onChangeLocale }: Props) => {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <MotionUl
      className={`flex flex-col gap-1 py-2 text-left w-[150px] border border-darkosPortfolio-gray-500/30 bg-darkosPortfolio-gray dark:bg-darkosPortfolio-black ${className}`}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      {Object.values(LANGUAGES_DATA_BY_CODE).map(languageData => (
        <Link
          className={`px-5 hover:bg-darkosPortfolio-gray-500/30 ${locale === languageData.code ? "font-bold" : ""}`}
          locale={languageData.code}
          onClick={onChangeLocale}
          key={languageData.code}
          href={pathname}
        >
          {`${languageData.code.toUpperCase()} - ${t(languageData.name)}`}
        </Link>
      ))}
    </MotionUl>
  );
};

export { Menu };
