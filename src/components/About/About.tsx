import ProjectsCTA from "../shared/ProjectsCTA";
import Info from "./Info";
import Tech from "./Tech";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="flex items-start gap-4">
        <Info />
        <div className="flex flex-1 flex-col items-center">
          <Tech />
          <ProjectsCTA />
        </div>
      </div>
    </section>
  );
}
