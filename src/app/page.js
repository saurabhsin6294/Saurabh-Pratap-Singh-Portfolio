import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-1 w-full bg-neutral-950">
        
        {/* Intro Hero Section */}
        <Hero />

        {/* Professional Summary */}
        <About />

        {/* Technical stack */}
        <Skills />

        {/* Projects showcase */}
        <Projects />

        {/* Chronological work experience timeline */}
        <Experience />

        {/* Academic Details */}
        <Education />

        {/* Message board form and information */}
        <Contact />

      </main>

      {/* Minimal Footer */}
      <Footer />
    </>
  );
}
