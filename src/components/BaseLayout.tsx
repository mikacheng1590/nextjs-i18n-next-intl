import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import LocaleSwitcher from "./LocaleSwitcher";
 
interface IBaseLayout {
  children: React.ReactNode;
  locale: string
}

export function generateStaticParams() {
  // Generate paths only for non-default locales
  return routing.locales
    .filter((locale) => locale !== routing.defaultLocale) // Exclude "en"
    .map((locale) => ({ locale }));
}

export default async function BaseLayout({
  children,
  locale
}: IBaseLayout) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  // setRequestLocale(locale);
 
  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LocaleSwitcher currentLocale={locale}/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}