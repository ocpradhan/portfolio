import { MeshGradientBackground } from "./components/ui/mesh-gradient";
import { ThemeProvider } from "./contexts/ThemeProvider";

import AboutMe from "./sections/about-me/AboutMe";
import Certifications from "./sections/certifications/Certifications";
import Education from "./sections/education/Education";
import FeaturedProjects from "./sections/featured-projects/FeaturedProjects";
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
          <FeaturedProjects />
          <Certifications />
          <Education />
        </div>
      </MeshGradientBackground>
    </ThemeProvider>
  );
}

export default App;
