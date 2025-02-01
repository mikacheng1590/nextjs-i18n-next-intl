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
    title: t("homePage.title")
  };
}

export default async function HomePage({
  params
}: IPageParams) {
  const { locale } = await params;

  const t = await getTranslations({
    locale: locale,
    namespace: "HomePage"
  });

  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href="/about">{t("goToAbout")}</Link>
    </div>
  );
}