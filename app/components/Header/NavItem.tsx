import Link from "next/link";

type NavItemProps = {
  href: string;
  text: string;
};
export default function NavItem({ text, href }: NavItemProps) {
  return (
    <li className="transition delay-75 ease-in-out hover:-translate-y-0.5 hover:text-slate-200">
      <Link href={href}>{text}</Link>
    </li>
  );
}
