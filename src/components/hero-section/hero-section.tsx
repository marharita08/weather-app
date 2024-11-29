import { useSelector } from "react-redux";

import { SearchBar } from "@/components/search-bar/search-bar";
import { WeatherDetailes } from "@/components/weather-details/weather-details";
import { RootState } from "@/store/store";
import { Theme } from "@/enums/theme.enum";

import baseStyles from "./hero-section-base.module.css";
import dayStyles from "./hero-section-day.module.css";
import nightStyles from "./hero-section-night.module.css";

const HeroSection: React.FC = () => {
  const { theme } = useSelector((state: RootState) => ({
    theme: state.theme.theme
  }));

  const themeStyles = theme === Theme.DAY ? dayStyles : nightStyles;

  return (
    <div className={`${baseStyles.heroSection} ${themeStyles.heroSection}`}>
      <SearchBar />
      <WeatherDetailes />
    </div>
  );
};

export { HeroSection };
