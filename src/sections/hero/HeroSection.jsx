import Header from "./components/Header";
import Photo from "./components/Photo";

function HeroSection() {
  return (
    <div className="flex items-start justify-between gap-0">
      <Photo />
      <Header />
    </div>
  );
}

export default HeroSection;
