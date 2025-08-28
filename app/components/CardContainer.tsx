import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContainer({
  children,
  className = "",
}: CardContainerProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className={`bg-slate-100 w-full max-w-4xl flex flex-col rounded-3xl border-4 shadow-2xl border-indigo-900/80 h-[96vh] ${className}`}
      >
        <Header />

        <section className="flex-1 flex flex-col items-center px-6 md:px-16 overflow-y-auto scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-indigo-900 scrollbar-track-slate-100">
          {children}
        </section>

        <Footer />
      </div>
    </div>
  );
}
