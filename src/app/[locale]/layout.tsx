import { getTranslations } from "next-intl/server";
import BaseLayout from "@/components/BaseLayout";
import { ILayoutParams } from "@/types/pages";

export async function generateMetadata({
  params
}: Omit<ILayoutParams, "children">) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "Metadata"
  });

  return {
    title: t("title")
  };
}

export default async function Layout({
  children,
  params
}: ILayoutParams) {
  const { locale } = await params;

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}