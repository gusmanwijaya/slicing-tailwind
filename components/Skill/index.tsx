import SkillItem from "../SkillItem";

export default function Skill() {
  return (
    <>
      <div className="px-14 flex flex-col justify-center items-center space-y-2">
        <h1 className="text-xl text-slate-600 font-semibold">Skills</h1>
        <p className="text-base text-slate-400 font-light">
          Beberapa kemampuan saya.
        </p>
      </div>
      <div className="hidden px-36 py-14 lg:grid grid-cols-3 gap-x-6 gap-y-6">
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
      </div>
      <div className="lg:hidden flex flex-col items-center justify-center space-y-6 py-8 px-12">
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/javascript.png" name="Javascript" desc="Lanjutan" />
        <SkillItem src="/nodejs.png" name="Node JS" desc="Pro" />
        <SkillItem src="/react.png" name="React" desc="Menengah" />
      </div>
    </>
  );
}
