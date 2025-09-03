import Image from "next/image";

interface TechStackProps {
  title: string;
  icons: string[];
}

export default function TechStack({ title, icons }: TechStackProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-lato font-extrabold text-xl mb-4 text-slate-800">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4">
        {icons.map((icon, index) => {
          const techName = icon.replace(".svg", "").toUpperCase();
          return (
            <div
              key={index}
              className="relative group rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow"
              title={techName}
            >
              <Image
                src={`/images/tech/${icon}`}
                width={32}
                height={32}
                alt={techName}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
