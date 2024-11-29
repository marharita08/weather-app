import { CityCard } from "@/components/city-card/city-card";

import styles from "./popular-cities.module.css";
import { popularCities } from "./popular-cities-items";

const PopularCities = () => {
  return (
    <div className={styles.popularCities}>
      <h1 className={styles.title}>
        Check the weather in most popular cities in the world
      </h1>
      <div className={styles.cards}>
        {popularCities.map(city => (
          <CityCard city={city} key={city.id} />
        ))}
      </div>
    </div>
  );
};

export { PopularCities };
