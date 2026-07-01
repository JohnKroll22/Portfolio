import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="flex-1">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
