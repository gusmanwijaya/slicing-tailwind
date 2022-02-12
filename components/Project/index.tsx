import ProjectItem from "../ProjectItem";

export default function Project() {
  return (
    <>
      <div className="px-14 flex flex-col justify-center items-center space-y-2">
        <h1 className="text-xl text-slate-600 font-semibold">Project</h1>
        <p className="text-base text-slate-400 font-light">
          Beberapa project buatan saya.
        </p>
      </div>
      <div className="hidden px-36 py-14 lg:grid grid-cols-2 gap-x-6 gap-y-10">
        <ProjectItem
          src="/project-1.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
        <ProjectItem
          src="/project-2.png"
          name="Resource"
          desc="Explorasi resource page"
        />
        <ProjectItem
          src="/project-2.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
        <ProjectItem
          src="/project-1.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
      </div>
      <div className="lg:hidden flex flex-col px-10 py-10 space-y-6">
        <ProjectItem
          src="/project-1.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
        <ProjectItem
          src="/project-2.png"
          name="Resource"
          desc="Explorasi resource page"
        />
        <ProjectItem
          src="/project-2.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
        <ProjectItem
          src="/project-1.png"
          name="Hasten"
          desc="Explorasi landing page"
        />
      </div>
    </>
  );
}
