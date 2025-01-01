import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { LANGUAGE_CODES } from "./constants";

export const routing = defineRouting({
  locales: Object.values(LANGUAGE_CODES),
  defaultLocale: LANGUAGE_CODES.ENGLISH,
  localePrefix: "never",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
