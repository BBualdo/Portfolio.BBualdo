import { revalia } from "@/utils/fonts";
import CTA from "../shared/CTA";
import Info from "./Info";
import Tech from "./Tech";

export default function About() {
  return (
    <section id="about" className="py-10 lg:py-20">
      <div className="flex flex-col gap-20">
        <h2 className={`${revalia.className} title`}>About</h2>
        <div className="flex items-center gap-4 xs:max-lg:flex-col lg:items-start">
          <Info />
          <div className="flex flex-1 flex-col items-center">
            <Tech />
            <CTA href="projects">Check out my work</CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
