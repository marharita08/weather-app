import styles from "./hero-section.module.css";
import { SearchBar } from "@/components/search-bar/search-bar";
import { WeatherDetailes } from "@/components/weather-details/weather-details";

const HeroSection: React.FC = () => {
  return <div className={styles.heroSection}>
    <SearchBar />
    <WeatherDetailes />
  </div>
}

export { HeroSection };
