import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-center mt-2">
      <div className="bg-indigo-900 rounded-t-3xl px-6 py-2 shadow-md">
        <ul className="flex gap-6">
          <li>
            <Link
              href="https://linkedin.com/in/ndamatta"
              className="block hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.svg"
                width={32}
                height={32}
                alt="LinkedIn profile"
              />
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ndamatta"
              className="block hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.svg"
                width={32}
                height={32}
                alt="GitHub profile"
              />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
