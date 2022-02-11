import Image from "next/image";
import { ProjectItemProps } from "../../data-types";

export default function ProjectItem({ src, name, desc }: ProjectItemProps) {
  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Image src={src} width={425} height={300} alt={`Project ${name}`} />
      <div className="text-center space-y-2">
        <p className="text-slate-600 text-base font-semibold">{name}</p>
        <p className="text-slate-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
