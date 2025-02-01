import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function NotFoundPage() {
  const t = await getTranslations({
    namespace: "NotFoundPage"
  });

  return (
    <div>
      <p>{t("message")}</p>
      <Link href="/">
        {t("backToHome")}
      </Link>
    </div>
  );
}