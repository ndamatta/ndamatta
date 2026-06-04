"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "./LocaleSwitcher";

const links = [
  { href: "/", labelKey: "home" },
  { href: "/career", labelKey: "career" },
  { href: "/projects", labelKey: "projects" },
  { href: "/contact", labelKey: "contact" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("header");

  return (
    <header className="relative flex justify-center">
      <nav className="bg-indigo-900 rounded-b-3xl shadow-lg px-8 py-4 w-full max-w-lg mx-4 relative">

        <ul className="hidden md:flex justify-between text-md md:text-xl text-slate-100 font-bevan">
          {links.map(({ href, labelKey }) => (
            <li key={href} className="hover:scale-105 transition-transform">
              <Link href={href}>{t(labelKey)}</Link>
            </li>
          ))}
        </ul>

        <div className="flex justify-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={t("toggleMenu")}
            aria-expanded={isOpen}
            className="flex flex-col justify-between w-8 h-6"
          >
            <span
              className={`block h-1 bg-slate-100 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            />
            <span
              className={`block h-1 bg-slate-100 rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-1 bg-slate-100 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-80 mt-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center text-md text-slate-100 font-bevan">
            {links.map(({ href, labelKey }) => (
              <li key={href} className="hover:scale-105 transition-transform">
                <Link href={href} onClick={() => setIsOpen(false)}>
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center mt-4">
            <LocaleSwitcher />
          </div>
        </div>
      </nav>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
        <LocaleSwitcher />
      </div>
    </header>
  );
}