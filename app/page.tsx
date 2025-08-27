import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TechStack from "./components/TechStack";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-slate-100 w-full max-w-4xl min-h-[700px] flex flex-col rounded-3xl border-x-7 relative shadow-2xl border-indigo-900/80">
        <Header />
        <section className="flex-1 flex flex-col items-center justify-center px-6 md:px-16">
          <div className="text-center space-y-6 mb-12">
            <h1 className="text-3xl md:text-4xl font-bevan">Hi!</h1>
            <p className="text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
              vero atque quis necessitatibus sequi autem nihil quae eum
              voluptatum, delectus facilis ipsa pariatur corporis aliquid iusto
              assumenda enim nostrum natus? Assumenda, molestiae laborum eveniet
              placeat tenetur exercitationem illo quidem, suscipit reiciendis
              praesentium sed ipsam, laboriosam blanditiis mollitia cupiditate
              voluptatum sint.
            </p>
          </div>

          <section className="w-full">
            <h2 className="text-3xl font-bevan text-center mb-8">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <TechStack
                title="Front-end"
                // icons={["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6"]}
              />
              <TechStack
                title="Back-end"
                // icons={["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6"]}
              />
              <TechStack
                title="Tools"
                // icons={["Icon1", "Icon2", "Icon3", "Icon4", "Icon5", "Icon6"]}
              />
            </div>
          </section>
        </section>
        <Footer />
      </div>
    </div>
  );
}
