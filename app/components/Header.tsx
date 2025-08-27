import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-center mb-10 md:mb-6">
      <nav className="bg-indigo-900 rounded-b-3xl shadow-lg px-8 py-4 w-full max-w-md mx-4">
        <ul className="flex justify-between text-md md:text-xl text-slate-100 font-bevan">
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
      </nav>
    </header>
  );
}
