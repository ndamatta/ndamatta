type Job = {
  company: string;
  period: string;
  title: string;
  description: string;
};

export default function Job({ company, period, title, description }: Job) {
  return (
    <div className="relative pl-6 mb-10 md:mb-8">
      <div className="absolute -left-[2.05rem] top-2 w-4 h-4 rounded-full bg-indigo-500 border-4 border-slate-100"></div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <h2 className="font-lato font-bold text-base sm:text-md md:text-lg text-slate-600">
            {company}
          </h2>
          <p className="font-lato text-xs sm:text-sm md:text-base text-slate-600">
            {period}
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-lato font-semibold text-base sm:text-lg md:text-xl text-slate-800">
            {title}
          </h3>
          <p
            className="mt-2 font-lato text-sm sm:text-base md:text-lg text-slate-700 leading-relaxed"
            style={{ whiteSpace: "pre-line" }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
