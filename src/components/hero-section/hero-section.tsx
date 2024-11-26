import styles from "./hero-section.module.css";
import { SearchBar } from "@/components/search-bar/search-bar";

const HeroSection: React.FC = () => {
  return <div className={styles.heroSection}>
    <SearchBar />
  </div>
}

export { HeroSection };
