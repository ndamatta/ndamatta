"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const otherLocale = locale === routing.defaultLocale
    ? routing.locales.find((l) => l !== routing.defaultLocale)!
    : routing.defaultLocale;

  function handleToggle() {
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <button
      onClick={handleToggle}
      className="flex bg-indigo-800 rounded-full p-1 cursor-pointer"
    >
      {routing.locales.map((loc) => (
        <span
          key={loc}
          className={`px-3 py-1 rounded-full text-sm font-lato font-bold uppercase ${
            locale === loc
              ? "bg-slate-100 text-indigo-900"
              : "text-slate-300"
          }`}
        >
          {loc}
        </span>
      ))}
    </button>
  );
}