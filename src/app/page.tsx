import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} Andrés Ruiz Jolivert
      </footer>
    </>
  );
}
