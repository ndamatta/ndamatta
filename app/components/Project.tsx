import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  videoUrl: string;
};

export default function Project({
  title,
  image,
  description,
  demoUrl,
  githubUrl,
  videoUrl,
}: Project) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 rounded-xl overflow-hidden">
        <Image
          src={`/images/projects/${image}`}
          width={400}
          height={250}
          alt={title}
          className="w-full object-cover hover:brightness-90 transition duration-200"
        />
      </div>

      <h3 className="text-xl font-bevan text-slate-800 mb-3">{title}</h3>

      <p className="text-sm font-lato text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex gap-3">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 bg-indigo-900 border-indigo-900 text-slate-100 px-3 py-2 rounded-lg text-sm font-lato text-center hover:brightness-90 duration-100"
        >
          Demo
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-indigo-900 text-indigo-900 px-3 py-2 rounded-lg text-sm font-lato text-center hover:bg-indigo-900 hover:text-slate-100 transition-all duration-100"
        >
          GitHub
        </Link>
        <Link
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-indigo-900 text-indigo-900 px-3 py-2 rounded-lg text-sm font-lato text-center hover:bg-indigo-900 hover:text-slate-100 transition-all duration-100"
        >
          Video
        </Link>
      </div>
    </div>
  );
}
