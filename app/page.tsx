import Hero from "@/components/main/Hero";
import Experience from "@/components/main/Experience";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <>
      <main id="top" className="mx-auto w-full max-w-5xl px-6">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
