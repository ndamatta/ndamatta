import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import TechStack from "@/app/components/TechStack";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomeContent />;
}

function HomeContent() {
  const t = useTranslations("home");

  const frontend = [
    "html.svg",
    "css3.svg",
    "js.svg",
    "wordpress.svg",
    "react.svg",
    "nextjs.svg",
    "tailwind.svg",
    "bulma.svg",
  ];

  const backend = [
    "nodejs.svg",
    "mongodb.svg",
    "postgresql.svg",
    "restapi.svg",
  ];

  const tools = [
    "git.svg",
    "github.svg",
    "npm.svg",
    "jira.svg",
    "slack.svg",
    "figma.svg",
  ];

  return (
    <>
      <div className="text-center space-y-6 mb-12 mt-8">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bevan text-slate-800">
          {t("title")}
        </h1>

        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          {t.rich("bio1", {
            bold: (chunks) => <span className="font-semibold text-slate-900">{chunks}</span>,
          })}
        </p>

        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          {t.rich("bio2", {
            bold: (chunks) => <span className="font-semibold text-slate-900">{chunks}</span>,
          })}
        </p>

        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          {t.rich("bio3", {
            italic: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </p>

        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          {t.rich("bio4", {
            linkCareer: (chunks) => <Link href="/career" className="text-blue-600 font-medium hover:underline">{chunks}</Link>,
            linkProjects: (chunks) => <Link href="/projects" className="text-blue-600 font-medium hover:underline">{chunks}</Link>,
          })}
        </p>
      </div>

      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-4 text-slate-800">
          {t("techStackTitle")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TechStack title={t("frontend")} icons={frontend} />
          <TechStack title={t("backend")} icons={backend} />
          <TechStack title={t("tools")} icons={tools} />
        </div>
      </section>
    </>
  );
}