"use client";

import { routing } from "@/i18n/routing";
import { useRouter, usePathname } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { useTransition, ChangeEvent } from "react";

interface ILocaleSwitcher {
  currentLocale: string;
}

export default function LocaleSwitcher({
  currentLocale
}: ILocaleSwitcher) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  }

  return (
    <select
      disabled={isPending}
      onChange={onSelectChange}
      value={currentLocale}
      >
        {routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale}
          </option>
        ))}
    </select>
  );
}