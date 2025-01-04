import { useLocale, useTranslations } from "next-intl";

import { MotionUl, MotionUlProps } from "@/app/[locale]/shared/Motion/Ul";
import { LANGUAGES_DATA_BY_CODE } from "@/i18n/constants";
import { Link, usePathname } from "@/i18n/routing";

type Props = MotionUlProps & {
  onClose: () => void;
};

const Menu = ({ className = "", onClose }: Props) => {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();

  return (
    <MotionUl
      className={`flex flex-col gap-1 py-2 text-left w-[150px] border border-[#555555]/30 bg-[#eeeeee] ${className}`}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      onClick={onClose}
    >
      {Object.values(LANGUAGES_DATA_BY_CODE).map(languageData => (
        <Link
          className={`px-5 hover:bg-[#555555]/30 ${locale === languageData.code ? "font-bold" : ""}`}
          href={`/${languageData.code}${pathname}`}
          key={languageData.code}
        >
          {`${languageData.code.toUpperCase()} - ${t(languageData.name)}`}
        </Link>
      ))}
    </MotionUl>
  );
};

export { Menu };
