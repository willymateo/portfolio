import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

import { LANGUAGE_CODES } from "./constants";

const routing = defineRouting({
  // A list of all locales that are supported
  locales: Object.values(LANGUAGE_CODES),

  // Used when no locale matches
  defaultLocale: LANGUAGE_CODES.ENGLISH,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
export { routing };
