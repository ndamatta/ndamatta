import CardContainer from "../components/CardContainer";
import Project from "../components/Project";
import projectsData from "@/data/ProjectData.json";

export default function ProjectsPage() {
  return (
    <CardContainer>
      <section className="flex-1 px-6 md:px-16 py-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-3xl md:text-3xl font-bevan text-slate-800 mb-4">
            My Projects
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-lato text-slate-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            cum illum similique corrupti ad laboriosam placeat suscipit
            doloribus repellat architecto aliquid, quae amet minima est
            consequuntur tempora atque consequatur quibusdam quas iure dolore
            nobis ea. Ex, dolorum. Quas, nobis laboriosam.
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
