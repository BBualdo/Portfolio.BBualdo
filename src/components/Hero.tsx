import { revalia } from "@/fonts";

export default function Hero() {
  return (
    <section id="hero" className={revalia.className}>
      <div className="flex h-full items-center justify-center">
        <h1 className="relative">
          Sebastian Opozda
          <span className="absolute left-0 top-0">Sebastian Opozda</span>
          <span className="absolute left-0 top-0 text-clip">
            Sebastian Opozda
          </span>
        </h1>
      </div>
    </section>
  );
}
