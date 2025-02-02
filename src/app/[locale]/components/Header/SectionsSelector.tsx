"use client";

import { Link, usePathname } from "@/i18n/routing";
import { ROUTES } from "../../constants";

const SectionsSelector = () => {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row items-center justify-center flex-wrap gap-5">
      {Object.values(ROUTES).map(route => {
        const isActive = pathname === route.href;

        return (
          <li key={route.id} className={`text-center ${isActive ? "font-bold" : ""}`}>
            <Link href={route.href}>{route.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SectionsSelector };
