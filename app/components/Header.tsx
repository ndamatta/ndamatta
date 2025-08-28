"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-center">
      <nav className="bg-indigo-900 rounded-b-3xl shadow-lg px-8 py-4 w-full max-w-md mx-4 relative">
        {/* Desktop Nav */}
        <ul className="hidden md:flex justify-between text-md md:text-xl text-slate-100 font-bevan">
          <li className="hover:scale-105 transition-transform">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:scale-105 transition-transform">
            <Link href="/career">Career</Link>
          </li>
          <li className="hover:scale-105 transition-transform">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:scale-105 transition-transform">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* Mobile Burger Button */}
        <div className="flex justify-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-between w-8 h-6"
          >
            <span
              className={`block h-1 bg-slate-100 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-slate-100 rounded transition-opacity duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-slate-100 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="flex flex-col gap-4 mt-6 text-center text-md text-slate-100 font-bevan md:hidden">
            <li className="hover:scale-105 transition-transform">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="hover:scale-105 transition-transform">
              <Link href="/career" onClick={() => setIsOpen(false)}>
                Career
              </Link>
            </li>
            <li className="hover:scale-105 transition-transform">
              <Link href="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </Link>
            </li>
            <li className="hover:scale-105 transition-transform">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
