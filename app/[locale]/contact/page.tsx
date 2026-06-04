import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactContent />;
}

function ContactContent() {
  const t = useTranslations("contact");

  return (
    <>
      <div className="flex justify-center mb-8 mt-8">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-900 shadow-lg">
          <Image
            src="/images/contact/pfp.png"
            alt={t("profileAlt")}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center space-y-6 mb-12">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bevan text-slate-800">
          {t("heading")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed md:leading-loose text-slate-700 mx-auto text-center">
          {t.rich("body1", {
            bold: (chunks) => <span className="font-semibold text-indigo-900">{chunks}</span>,
          })}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed md:leading-loose text-slate-700 mx-auto text-center">
          {t.rich("body2", {
            bold: (chunks) => <span className="font-semibold text-indigo-900">{chunks}</span>,
          })}
        </p>
      </div>

      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
          {t("getInTouch")}
        </h2>

        <div className="flex justify-center mb-5">
          <div className="bg-indigo-900 rounded-3xl px-8 py-6 shadow-lg">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="https://linkedin.com/in/ndamatta"
                  className="flex flex-col items-center gap-2 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src="/linkedin.svg"
                      width={40}
                      height={40}
                      alt={t("linkedinAlt")}
                    />
                  </div>
                  <span className="text-white text-sm font-lato">{t("linkedinLabel")}</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ndamatta"
                  className="flex flex-col items-center gap-2 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src="/github.svg"
                      width={40}
                      height={40}
                      alt={t("githubAlt")}
                    />
                  </div>
                  <span className="text-white text-sm font-lato">{t("githubLabel")}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}