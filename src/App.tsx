import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/hero-section/hero-section";
import { PopularCities } from "./components/popular-cities/popular-cities";
import { Questions } from "./components/questions/questions";

function App() {
  return (
    <>
      <HeroSection />
      <PopularCities />
      <Questions />
      <Footer />
    </>
  );
}

export default App;
