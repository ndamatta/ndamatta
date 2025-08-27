import Image from "next/image";

interface TechStackProps {
  title: string;
  //icons: any[];
}

export default function TechStack(props: TechStackProps) {
  return (
    <div className="flex flex-col items-center mt-7">
      <h3 className="font-lato font-extrabold text-[20px]">{props.title}</h3>
      <div className="grid grid-cols-3 gap-4 **:rounded-[13px]">
        {/* MUST CREATE ASSESTS FOR EACH ICON AS SVG COMPONENTS IN THE FUTURE, INSERTING A CAT PLACEHOLDER FOR NOW
        {props.icons.map((icon, index) => (
          <div className="mt-5" key={index}>
            {icon}
          </div>
        ))}
          */}
        <Image
          src="https://placecats.com/32/32"
          width={32}
          height={32}
          alt="Tech Stack icon"
        />
      </div>
    </div>
  );
}
