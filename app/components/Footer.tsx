import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="w-[210px] h-[40px] rounded-t-[40px] bg-indigo-900 absolute bottom-0 justify-self-center content-center shadow-md">
        <ul className="flex flex-row justify-evenly text-[23px] text-slate-100 font-bevan translate-y-1 **:rounded-[13px]">
          <li className="item-animation">
            <Image
              src="https://placecats.com/32/32"
              width={32}
              height={32}
              alt="Social media icon"
            />
          </li>
          <li className="item-animation">
            <Image
              src="https://placecats.com/32/32"
              width={32}
              height={32}
              alt="Social media icon"
            />
          </li>
          <li className="item-animation">
            <Image
              src="https://placecats.com/32/32"
              width={32}
              height={32}
              alt="Social media icon"
            />
          </li>
        </ul>
      </div>
    </footer>
  );
}
