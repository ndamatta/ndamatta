"use client";

import { usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const routeConfig: Record<string, { maxWidth: string; showFooter: boolean }> = {
  "/career": { maxWidth: "72rem", showFooter: true },
  "/contact": { maxWidth: "56rem", showFooter: false },
  "/projects": { maxWidth: "56rem", showFooter: true },
  "/": { maxWidth: "56rem", showFooter: true },
};

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardContainer({
  children,
  className = "",
}: CardContainerProps) {
  const pathname = usePathname();
  const locale = useLocale();
  const config = routeConfig[pathname] ?? { maxWidth: "56rem", showFooter: true };

  return (
    <div className="p-4 md:min-h-screen md:flex md:items-center md:justify-center">
      <div
        style={{ maxWidth: config.maxWidth, transition: "max-width 300ms ease-in-out" }}
        className={`bg-slate-100 w-full flex flex-col rounded-3xl border-4 shadow-2xl border-indigo-900/80 min-h-[80vh] md:min-h-0 md:h-[90vh] ${className}`}
      >
        <Header />

        <section className="flex-1 flex flex-col items-center px-6 md:px-16 md:overflow-y-auto md:scrollbar-thumb-rounded-full md:scrollbar-track-rounded-full md:scrollbar md:scrollbar-thumb-indigo-900 md:scrollbar-track-slate-100">
          <div key={`${locale}-${pathname}`} className="w-full animate-pageFadeIn">
            {children}
          </div>
        </section>

        {config.showFooter && <Footer />}
      </div>
    </div>
  );
}