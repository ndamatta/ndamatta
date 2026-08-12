import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Bevan, Lato } from "next/font/google";
import { buildMetadata } from "@/lib/seo";
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
  return buildMetadata({ locale, namespace: "metadata" });
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