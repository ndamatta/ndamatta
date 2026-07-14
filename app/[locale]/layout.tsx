import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Bevan, Lato } from "next/font/google";
import CardContainer from "@/app/components/CardContainer";
import "../globals.css";

const bevan = Bevan({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bevan",
  display: "swap",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const baseUrl = "https://ndamatta.com.ar";

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    robots: { index: true, follow: true },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${baseUrl}/${locale}`,
      siteName: "Natanael da Matta",
      locale: locale === "es" ? "es_AR" : "en_US",
      type: "website",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
        "x-default": `${baseUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`${bevan.variable} ${lato.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Natanael da Matta",
              jobTitle: "Software Developer",
              url: "https://ndamatta.com.ar",
              sameAs: [
                "https://linkedin.com/in/ndamatta",
                "https://github.com/ndamatta",
              ],
              image: "https://ndamatta.com.ar/images/contact/pfp.png",
            }),
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <CardContainer>{children}</CardContainer>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}