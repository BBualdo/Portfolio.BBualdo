import { revalia } from "@/utils/fonts";
import CodeBackground from "./backgrounds/CodeBackground";
import ProjectsCTA from "./shared/ProjectsCTA";

export default function Hero() {
  return (
    <>
      <CodeBackground />
      <section id="hero" className={revalia.className}>
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h1 className={`relative`}>Sebastian Opozda</h1>
          <h2 className="uppercase">
            I am a <span className="text-viceCyan">Web Developer</span>
          </h2>
          <ProjectsCTA />
        </div>
      </section>
    </>
  );
}
