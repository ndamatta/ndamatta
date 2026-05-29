import Badge from "./Badge";

type Education = {
  institution: string;
  period: string;
  title: string;
  description: string;
  tags: string[];
};

export default function Education({
  institution,
  period,
  title,
  description,
  tags,
}: Education) {
  return (
    <div className="relative pl-3 mb-10 md:mb-8">
      <div className="absolute -left-[21px] top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-100"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <h2 className="font-lato font-bold text-base md:text-lg text-slate-600">
            {institution}
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
          {description && (
            <p className="mt-2 font-lato text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}