import { getTranslations } from "next-intl/server";
import { ReactNode } from "react";
import BaseLayout from "@/components/BaseLayout";

interface ILayout {
  children: ReactNode;
  params: {
    locale: string
  };
};

export async function generateMetadata({
  params
}: Omit<ILayout, "children">) {
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
}: ILayout) {
  const { locale } = await params;

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}