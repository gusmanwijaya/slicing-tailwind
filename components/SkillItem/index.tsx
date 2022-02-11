import { SkillItemProps } from "../../data-types";

/* eslint-disable @next/next/no-img-element */
export default function SkillItem({ src, name, desc }: SkillItemProps) {
  return (
    <div className="container bg-white shadow-lg rounded-lg w-full h-full">
      <div className="avatar py-4 flex flex-row items-center px-6 space-x-4">
        <div className="rounded-full w-14 h-14">
          <img src={src} alt={`Skill ${name}`} />
        </div>
        <div>
          <p className="text-slate-600 text-base font-semibold">{name}</p>
          <p className="text-slate-400 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}
