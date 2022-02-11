import Header from "../components/Header";
import Hero from "../components/Hero";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Skill from "../components/Skill";

export default function Home() {
  return (
    <>
      <Header title="Landing Page" />
      <section>
        <Hero />
      </section>
      <section className="py-10 lg:py-32">
        <Profile />
      </section>
      <section className="py-10 lg:py-32 bg-slate-100">
        <Skill />
      </section>
      <section className="py-10 lg:py-32">
        <Project />
      </section>
    </>
  );
}
