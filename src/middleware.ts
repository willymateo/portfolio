import createIntlMiddleware from "next-intl/middleware";

import { LANGUAGE_CODES } from "./i18n/constants";
import { routing } from "./i18n/routing";

export default createIntlMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", `/(${Object.values(LANGUAGE_CODES).join("|")})/:path*`],
};
