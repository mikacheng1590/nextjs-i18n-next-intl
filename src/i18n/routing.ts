import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en-US", "zh-HK"],
 
  // Used when no locale matches
  defaultLocale: "en-US",

  localePrefix: {
    "mode": "as-needed",  // no locale prefix for default locale
    prefixes: {
      "en-US": "",
      "zh-HK": "/hk"
    },
  },

  localeDetection: false
});
 
// Lightweight wrappers around Next.js' navigation APIs that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);