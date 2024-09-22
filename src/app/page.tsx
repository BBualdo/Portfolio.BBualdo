import About from "@/components/About/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import Nav from "@/components/shared/Nav";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Nav />
      </main>
      <Footer />
    </>
  );
}
