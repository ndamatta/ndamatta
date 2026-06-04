import { setRequestLocale, getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Project from "@/app/components/Project";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ProjectsContent />;
}

function ProjectsContent() {
  const t = useTranslations("projects");

  const projects = t.raw("items");

  return (
    <section className="flex-1 px-6 md:px-16 py-8 space-y-12">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-slate-800 mb-4">
          {t("heading")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-lato text-slate-700 leading-relaxed">
          {t("intro1")}
        </p>
        <p className="text-base sm:text-lg md:text-xl font-lato text-slate-700 leading-relaxed">
          {t("intro2")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project: { title: string; image: string; description: string; demoUrl: string; githubUrl: string; videoUrl: string; technologies: string[] }, idx: number) => (
          <Project key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}