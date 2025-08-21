import NavItem from "@/app/components/Header/NavItem";

export default function NavList() {
  return (
    <ul className="flex flex-row justify-evenly text-[23px] text-slate-100 font-bevan">
      <NavItem href="/career" text="Career" />
      <NavItem href="/projects" text="Projects" />
      <NavItem href="/contact" text="Contact" />
    </ul>
  );
}
