import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import TechStack from "./components/TechStack";

export default function HomePage() {
  return (
    <div className="bg-radial absolute h-full w-full flex items-center justify-center from-slate-600 to-slate-900 ">
      <div className="bg-slate-100 w-[900px] h-[705px] rounded-[30px] border-x-7 relative border-indigo-900/80">
        <Header />
        <div className="flex flex-col items-center justify-center mt-15">
          <h1 className="text-[28px] font-bevan">Hi!</h1>
          <p className="text-[22px] font-lato mx-16 text-center ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
            vero atque quis necessitatibus sequi autem nihil quae eum
            voluptatum, delectus facilis ipsa pariatur corporis aliquid iusto
            assumenda enim nostrum natus? Assumenda, molestiae laborum eveniet
            placeat tenetur exercitationem illo quidem, suscipit reiciendis
            praesentium sed ipsam, laboriosam blanditiis mollitia cupiditate
            voluptatum sint.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-10">
          <h2 className="text-[28px] font-bevan">Tech Stack</h2>
          <div className="grid grid-cols-3 gap-18">
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
        </div>
        <Footer />
      </div>
    </div>
  );
}
