import Link from "next/link";
import Image from "next/image";

type Project = {
  title: string;
  image: string;
  description: string;
  demoUrl: string;
  githubUrl: string;
  videoUrl: string;
  technologies: string[];
};

export default function Project({
  title,
  image,
  description,
  demoUrl,
  githubUrl,
  videoUrl,
  technologies,
}: Project) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-3 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4 rounded-xl overflow-hidden relative aspect-video">
        <Image
          src={`/images/projects/${image}`}
          alt={title}
          fill
          className="object-cover hover:brightness-90 transition duration-200"
        />
      </div>

      <h3 className="text-xl font-bevan text-slate-800 mb-1">{title}</h3>

      <div className="flex flex-wrap gap-1 mb-2">
        {technologies.map((tech) => (
          <span key={tech} className="text-xs font-lato px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-900">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-sm font-lato text-slate-600 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:flex-1 border-2 bg-indigo-900 border-indigo-900 text-slate-100 px-4 py-2 rounded-lg text-sm font-lato text-center hover:brightness-90 duration-100"
        >
          Demo
        </Link>
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 border-2 border-indigo-900 text-indigo-900 px-1 py-2 rounded-lg text-sm font-lato text-center hover:bg-indigo-900 hover:text-slate-100 transition-all duration-100"
        >
          GitHub
        </Link>
        {videoUrl && (
          <Link
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border-2 border-indigo-900 text-indigo-900 px-1 py-2 rounded-lg text-sm font-lato text-center hover:bg-indigo-900 hover:text-slate-100 transition-all duration-100"
          >
            Video
          </Link>
        )}
      </div>
    </div>
  );
}
