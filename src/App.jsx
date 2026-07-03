import AboutMe from "./sections/about-me/AboutMe";
import HeroSection from "./sections/hero/HeroSection";
import Container from "./ui/Container";

function App() {
  return (
    <main className="p-5 tracking-widest text-[#CED4DA]">
      <HeroSection />
      <Container>
        <AboutMe />
      </Container>
    </main>
  );
}

export default App;
