import Badge from "./Badge";

type Job = {
  company: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
};

function parseDescription(desc: string) {
  if (!desc) return null;

  const lines = desc.split("\n");
  const paragraphs: string[] = [];
  const bullets: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("-")) {
      bullets.push(trimmed.slice(1).trim());
    } else if (trimmed) {
      paragraphs.push(trimmed);
    }
  }

  return { paragraphs, bullets };
}

export default function Job({ company, period, title, description, tags }: Job) {
  const parsed = parseDescription(description);

  return (
    <div className="relative pl-3 mb-10 md:mb-8">
      <div className="absolute -left-[21px] top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-100"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <h2 className="font-lato font-bold text-base md:text-lg text-slate-600">
            {company}
          </h2>
          <p className="font-lato text-xs sm:text-sm md:text-base text-slate-600">
            {period}
          </p>
          {tags.length > 0 && (
            <div className="hidden md:flex flex-wrap gap-1 mt-2">
              {tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-3">
          <h3 className="font-lato font-semibold text-base sm:text-lg md:text-xl text-slate-800">
            {title}
          </h3>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 md:hidden">
              {tags.map((tag) => (
                <Badge key={tag} label={tag} />
              ))}
            </div>
          )}
          {parsed && (
            <div className="mt-2">
              {parsed.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-lato text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {parsed.bullets.length > 0 && (
                <ul className="list-disc ml-4 space-y-1 mt-1">
                  {parsed.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="font-lato text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}