"use client";

import { useLocale, useTranslations } from "next-intl";

import { LANGUAGES_DATA_BY_CODE } from "@/i18n/constants";
import { usePathname } from "next/navigation";
import { Link } from "@/i18n/routing";

const LanguageMenu = () => {
  const t = useTranslations();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <ul className="flex flex-col">
      {Object.values(LANGUAGES_DATA_BY_CODE).map(languageData => (
        <Link
          className={`${locale === languageData.code ? "font-bold" : ""}`}
          href={`/${languageData.code}${pathname}`}
          key={languageData.code}
        >
          {`${languageData.code.toUpperCase()} - ${t(languageData.name)}`}
        </Link>
      ))}
    </ul>
  );
};

export { LanguageMenu };
