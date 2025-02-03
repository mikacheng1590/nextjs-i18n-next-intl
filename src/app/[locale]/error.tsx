"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

interface IError {
  error: Error;
};

export default function Error({
  error
}: IError) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      {t("title")}
    </div>
  );
}