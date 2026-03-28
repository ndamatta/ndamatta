"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/career", label: "Career" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center">
      <nav className="bg-indigo-900 rounded-b-3xl shadow-lg px-8 py-4 w-full max-w-md mx-4 relative">

        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between text-md md:text-xl text-slate-100 font-bevan">
          {links.map(({ href, label }) => (
            <li key={href} className="hover:scale-105 transition-transform">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        {/* Burger Btn */}
        <div className="flex justify-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
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

        {/* Mobile Menu — animated with max-h */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "max-h-64 mt-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-center text-md text-slate-100 font-bevan">
            {links.map(({ href, label }) => (
              <li key={href} className="hover:scale-105 transition-transform">
                <Link href={href} onClick={() => setIsOpen(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}