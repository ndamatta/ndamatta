import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
  containerWidth?: string;
  showFooter?: boolean;
}

export default function CardContainer({
  children,
  className = "",
  containerWidth="",
  showFooter = true,
}: CardContainerProps) {
  return (
    <div className="p-4 md:min-h-screen md:flex md:items-center md:justify-center">
      <div
        className={`bg-slate-100 w-full ${containerWidth} flex flex-col rounded-3xl border-4 shadow-2xl border-indigo-900/80 min-h-[80vh] md:min-h-0 md:h-[90vh] ${className}`}
      >
        <Header />

        <section className="flex-1 flex flex-col items-center px-6 md:px-16 md:overflow-y-auto md:scrollbar-thumb-rounded-full md:scrollbar-track-rounded-full md:scrollbar md:scrollbar-thumb-indigo-900 md:scrollbar-track-slate-100">
          {children}
        </section>

        {showFooter && <Footer />}
      </div>
    </div>
  );
}
