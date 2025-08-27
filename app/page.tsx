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
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          praesentium neque excepturi, sint maiores nisi facilis minima commodi
          ex vero consectetur quas possimus voluptatem deleniti optio molestiae
          laudantium est tempora assumenda ab provident at. Suscipit minus
          eligendi qui libero ducimus atque? Quisquam aliquid, similique maiores
          voluptates illo ullam voluptatum beatae.
        </p>
      </div>

      {/* Tech Stack */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-4 text-slate-800">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <TechStack title="Front-end" />
          <TechStack title="Back-end" />
          <TechStack title="Tools" />
        </div>
      </section>
    </CardContainer>
  );
}
