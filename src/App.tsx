import { MeshGradientBackground } from "./components/ui/mesh-gradient";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Hero from "./sections/hero/Hero";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-them">
      <MeshGradientBackground>
        <div className="p-6">
          <Hero />
        </div>
      </MeshGradientBackground>
    </ThemeProvider>
  );
}

export default App;
