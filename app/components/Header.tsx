import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="w-[500px] h-[70px] rounded-b-[50px] bg-indigo-900 justify-self-center content-center shadow-lg">
          <ul className="flex justify-evenly text-[23px] text-slate-100 font-bevan">
            <li className="item-animation">
              <Link href="/career">Career</Link>
            </li>
            <li className="item-animation">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="item-animation">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
