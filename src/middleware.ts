import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(hk|en)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
    // However, match all pathnames within `/users`, optionally with a locale prefix
    "/([\\w-]+)?/users/(.+)"
  ]
};

export default createMiddleware(routing);