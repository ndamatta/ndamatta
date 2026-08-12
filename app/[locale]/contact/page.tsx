import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { buildMetadata } from "@/lib/seo";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return buildMetadata({ locale, namespace: "contact", path: "/contact" });
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
      <div className="flex justify-center mb-6 mt-4">
        <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-indigo-900 shadow-lg">
          <Image
            src="/images/contact/pfp.png"
            alt={t("profileAlt")}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center space-y-5 mb-10">
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
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-6 text-slate-800">
          {t("getInTouch")}
        </h2>

        <div className="flex justify-center">
          <div className="bg-indigo-900 rounded-3xl px-8 py-6 shadow-lg">
            <ul className="flex gap-8">
              <li>
                <a
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
                </a>
              </li>
              <li>
                <a
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
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}