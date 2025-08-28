import CardContainer from "../components/CardContainer";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <CardContainer showFooter={false}>
      {/* Profile Picture */}
      <div className="flex justify-center mb-8 mt-8">
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full border-4 border-indigo-900 overflow-hidden shadow-lg">
          <Image
            src="/profile.jpg" // Replace with your actual profile image path
            width={192}
            height={192}
            alt="Profile picture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contact Text */}
      <div className="text-center space-y-6 mb-12">
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bevan text-slate-800">
          Let's Connect!
        </h1>
        <p className="text-base sm:text-lg md:text-xl font-lato max-w-2xl leading-relaxed mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima hic
          doloremque facilis, accusamus, qui numquam laboriosam dolorum aliquid
          eligendi, nemo iusto eius sunt veritatis. Culpa vitae recusandae sequi
          ea quidem aspernatur sit, ipsam natus autem repellat, quam nemo
          nostrum doloremque!
        </p>
      </div>

      {/* Contact Methods */}
      <section className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bevan text-center mb-8 text-slate-800">
          Get In Touch
        </h2>

        {/* Social Links - Enhanced Footer Style */}
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
