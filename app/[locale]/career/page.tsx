import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Job from "@/app/components/Job";
import Education from "@/app/components/Education";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "career" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function CareerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <CareerContent />;
}

function CareerContent() {
  const t = useTranslations("career");

  const jobs = t.raw("jobs");
  const educationItems = t.raw("educationItems");

  return (
    <section className="py-8 space-y-12 w-full">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bevan text-slate-800 mb-4">
          {t("heading")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-lato leading-relaxed mx-auto text-slate-700">
          {t.rich("intro1", {
            bold: (chunks) => <span className="font-semibold text-slate-900">{chunks}</span>,
          })}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-lato leading-relaxed mx-auto text-slate-700">
          {t.rich("intro2", {
            bold: (chunks) => <span className="font-semibold text-slate-900">{chunks}</span>,
          })}
        </p>
      </div>

      <div>
        <h2 className="text-2xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
          {t("jobExperiences")}
        </h2>

        <div className="relative pl-3 border-l-2 border-indigo-900">
          {jobs.map((job: { company: string; period: string; title: string; description: string; tags: string[] }, idx: number) => (
            <Job key={idx} {...job} />
          ))}
        </div>
      </div>

      <hr className="border-slate-300" />

      <div>
        <h2 className="text-2xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
          {t("education")}
        </h2>

        <div className="relative pl-3 border-l-2 border-indigo-900">
          {educationItems.map((edu: { institution: string; period: string; title: string; description: string; tags: string[] }, idx: number) => (
            <Education key={idx} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}