import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-[160px] h-[40px] rounded-t-[40px] bg-indigo-900 pt-1 absolute bottom-0 justify-self-center content-center shadow-md">
        <ul className="flex flex-row justify-evenly text-[23px] text-slate-100 font-bevan **:rounded-[13px]">
          <li className="item-animation">
            <Image
              src="/linkedin.svg"
              width={32}
              height={32}
              alt="Linkedin icon"
            />
          </li>
          <li className="item-animation">
            <Image src="/github.svg" width={32} height={32} alt="Github icon" />
          </li>
        </ul>
      </div>
    </footer>
  );
}
