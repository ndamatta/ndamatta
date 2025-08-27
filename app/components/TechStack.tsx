import Image from "next/image";

interface TechStackProps {
  title: string;
  // icons?: string[]; // For future use
}

export default function TechStack({ title }: TechStackProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-lato font-extrabold text-xl mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="rounded-xl p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src="https://placecats.com/32/32"
              width={32}
              height={32}
              alt={`${title} technology ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
