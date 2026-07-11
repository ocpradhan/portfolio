import { MeshGradientBackground } from "./components/ui/mesh-gradient";
import { ThemeProvider } from "./contexts/ThemeProvider";
import AboutMe from "./sections/about-me/AboutMe";
import Hero from "./sections/hero/Hero";
import TechStack from "./sections/tech-stack/TechStack";
import WorkExperience from "./sections/work-experience/WorkExperience";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <MeshGradientBackground>
        <div className="h-screen overflow-auto p-6">
          <Hero />
          <AboutMe />
          <TechStack />
          <WorkExperience />
        </div>
      </MeshGradientBackground>
    </ThemeProvider>
  );
}

export default App;
