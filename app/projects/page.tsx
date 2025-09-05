import CardContainer from "../components/CardContainer";
import Project from "../components/Project";
import projectsData from "@/data/ProjectData.json";

export default function ProjectsPage() {
  return (
    <CardContainer>
      <section className="flex-1 px-6 md:px-16 py-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-slate-800 mb-4">
            Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lato text-slate-700 leading-relaxed">
            A selection of projects I’ve built to explore new technologies,
            solve real-world problems, and sharpen my skills as a full-stack
            developer. Each project reflects my focus on clean, efficient code,
            collaboration, and delivering practical solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, idx) => (
            <Project key={idx} {...project} />
          ))}
        </div>
      </section>
    </CardContainer>
  );
}
