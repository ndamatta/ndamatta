import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

const baseUrl = "https://ndamatta.com.ar";
const ogImage = "/images/contact/pfp.png";

type BuildMetadataArgs = {
  locale: string;
  namespace: string;
  path?: string;
};

export async function buildMetadata({
  locale,
  namespace,
  path = "",
}: BuildMetadataArgs): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const url = `${baseUrl}/${locale}${path}`;
  const enUrl = `${baseUrl}/en${path}`;
  const esUrl = `${baseUrl}/es${path}`;
  const ogLocale = locale === "es" ? "es_AR" : "en_US";

  return {
    title: t("title"),
    description: t("description"),
    ...(namespace === "metadata" ? { keywords: t("keywords") } : {}),
    robots: { index: true, follow: true },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url,
      siteName: "Natanael da Matta",
      locale: ogLocale,
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        es: esUrl,
        "x-default": enUrl,
      },
    },
  };
}
