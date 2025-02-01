import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import IPageParams from "@/types/pages";

export async function generateMetadata({
  params
}: IPageParams) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata"
  });
 
  return {
    title: t("aboutPage.title")
  };
}

export default async function AboutPage({
  params
}: IPageParams) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "AboutPage"
  });

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/">{t("goToHome")}</Link>
    </div>
  );
}