import { revalia } from "@/fonts";
import CodeBackground from "./backgrounds/CodeBackground";

export default function Hero() {
  return (
    <>
      <CodeBackground />
      <section id="hero">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className={`${revalia.className} relative`}>Sebastian Opozda</h1>
          <h2>I am a Web Developer</h2>
        </div>
      </section>
    </>
  );
}
