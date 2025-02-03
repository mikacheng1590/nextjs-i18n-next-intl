import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
 
export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
  const locales: readonly string[] = routing.locales;
 
  // Ensure that a valid locale is used
  if (!locale || !locales.includes(locale)) {
    //typeof routing.locales[number]
    locale = routing.defaultLocale;
  }
 
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});