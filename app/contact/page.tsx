import CardContainer from "../components/CardContainer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <CardContainer showFooter={false}>
      <div className="flex justify-center mb-8 mt-8">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-900 shadow-lg">
          <Image
            src="/images/contact/pfp.png"
            alt="Profile picture"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="text-center space-y-6 mb-12">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bevan text-slate-800">
          Let's Connect!
        </h1>
        {/* prettier-ignore */}
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed md:leading-loose text-slate-700 mx-auto text-center">
          I’m open to <span className="font-semibold text-indigo-900">exciting opportunities</span> and collaborations in software development. 
          If you’d like to discuss a project, role, or just connect, feel free to <span className="font-semibold text-indigo-900">reach out via LinkedIn or GitHub</span> below.
        </p>
      </div>

      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
          Get In Touch
        </h2>

        <div className="flex justify-center">
          <div className="bg-indigo-900 rounded-3xl px-8 py-6 shadow-lg">
            <ul className="flex gap-8">
              <li>
                <Link
                  href="https://linkedin.com/in/ndamatta"
                  className="flex flex-col items-center gap-2 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src="/linkedin.svg"
                      width={40}
                      height={40}
                      alt="LinkedIn profile"
                    />
                  </div>
                  <span className="text-white text-sm font-lato">LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/ndamatta"
                  className="flex flex-col items-center gap-2 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>
                    <Image
                      src="/github.svg"
                      width={40}
                      height={40}
                      alt="GitHub profile"
                    />
                  </div>
                  <span className="text-white text-sm font-lato">GitHub</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </CardContainer>
  );
}
