import Link from "next/link";
import NavList from "@/app/components/Header/NavList";

export default function NavBar() {
  return (
    <nav>
      <div className="w-[500px] h-[70px] rounded-b-[50px] bg-indigo-900 justify-self-center content-center shadow-lg">
        <NavList />
      </div>
    </nav>
  );
}
