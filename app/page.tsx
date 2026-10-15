import AboutMe from "@/components/layout/AboutMe";
import Certifications from "@/components/layout/Certifications";
import Experience from "@/components/layout/Experience";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Projects from "@/components/layout/Projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-viga">
      <Header />
      <div className="px-40 py-10">
        <Hero />
      </div>
      <hr className="border-foreground/50" />
      <AboutMe />
      <hr className="border-foreground/50" />
      <Projects />
      <hr className="border-foreground/50" />
      <Experience />
      <hr className="border-foreground/50" />
      <Certifications />

      <Footer />
    </main>
  );
}
