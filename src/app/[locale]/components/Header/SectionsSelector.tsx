"use client";

import { useTranslations } from "next-intl";

import { Link, usePathname } from "@/i18n/routing";
import { ROUTES } from "../../constants";

const SectionsSelector = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <ul className="flex flex-row items-center justify-center flex-wrap gap-5">
      {Object.values(ROUTES).map(route => {
        const isActive = pathname === route.href;

        return (
          <li
            className={`text-center ${isActive ? "font-bold pointer-events-none" : ""}`}
            key={route.id}
          >
            <Link href={isActive ? "" : route.href}>{t(route.name)}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SectionsSelector };
