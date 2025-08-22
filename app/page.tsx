import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function HomePage() {
  return (
    <div className="bg-radial absolute h-full w-full flex items-center justify-center from-slate-600 to-slate-900 ">
      <div className="bg-slate-100 w-[900px] h-[705px] rounded-[30px] border-x-7 relative border-indigo-900/80">
        <Header />
        <Footer />
      </div>
    </div>
  );
}
