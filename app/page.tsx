import CardContainer from "./components/CardContainer";
import TechStack from "./components/TechStack";

export default function HomePage() {
  return (
    <CardContainer>
      {/* Hero */}
      <div className="text-center space-y-6 mb-12 mt-8">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bevan text-slate-800">
          Hi!
        </h1>

        {/* prettier-ignore */}
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          I’m a <span className="font-semibold text-slate-900">full-stack developer</span> with over <span className="font-semibold">3 years of experience</span> in the corporate tech industry. I focus on writing clean, efficient code that delivers reliable solutions and seamless user experiences.
        </p>

        {/* prettier-ignore */}
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          Outside of work, I enjoy <span className="italic">football, board games</span>, and <span className="italic">exploring new video games</span>.
        </p>

        {/* prettier-ignore */}
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto text-slate-700">
          Want to learn more? Check out my <a href="/career" className="text-blue-600 font-medium hover:underline">Career Path</a> or explore some of my <a href="/projects" className="text-blue-600 font-medium hover:underline">Projects</a>.
        </p>
      </div>

      {/* Tech Stack */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-4 text-slate-800">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TechStack
            title="Front-end"
            icons={[
              "html.svg",
              "css3.svg",
              "js.svg",
              "react.svg",
              "nextjs.svg",
              "tailwind.svg",
              "wordpress.svg",
            ]}
          />
          <TechStack
            title="Back-end"
            icons={[
              "nodejs.svg",
              "mongodb.svg",
              "postgresql.svg",
              "restapi.svg",
            ]}
          />
          <TechStack
            title="Tools"
            icons={[
              "git.svg",
              "github.svg",
              "npm.svg",
              "jira.svg",
              "slack.svg",
              "figma.svg",
            ]}
          />
        </div>
      </section>
    </CardContainer>
  );
}
