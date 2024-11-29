import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Footer } from "./components/footer/footer";
import { HeroSection } from "./components/hero-section/hero-section";
import { PopularCities } from "./components/popular-cities/popular-cities";
import { Questions } from "./components/questions/questions";
import { AppDispatch } from "./store/store";
import { actions as themeActions } from "./store/theme/themes";
import { actions as cityActions } from "./store/cities/cities";

function App() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(themeActions.setTheme());
    dispatch(cityActions.loadCities());
  }, [dispatch]);

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
