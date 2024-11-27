import { CityCard } from "@/components/city-card/city-card";
import newYorkImage from "@/assets/new-york.png";
import londonImage from "@/assets/london.png";
import dubaiImage from "@/assets/dubai.png";
import parisImage from "@/assets/paris.png";

import styles from "./popular-cities.module.css";

const PopularCities = () => {
  return <div className={styles.popularCities}>
    <h1 className={styles.title} >Check the weather in most popular cities in the world</h1>
    <div className={styles.cards}>
      <CityCard title="New York" image={newYorkImage} />
      <CityCard title="London" image={londonImage} />
      <CityCard title="Dubai" image={dubaiImage} />
      <CityCard title="Paris" image={parisImage}/>
    </div>
  </div>
}

export { PopularCities };
