import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { type PopularCity } from "@/types/popular-city.type";
import { actions as weatherActions } from "@/store/weather/weather";
import { AppDispatch } from "@/store/store";

import styles from "./city-card.module.css";

type Properties = {
  city: PopularCity;
};

const CityCard: React.FC<Properties> = ({ city }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(weatherActions.getWeather(city.id));
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [dispatch, city]);

  return (
    <div className={styles.card} onClick={handleClick}>
      <img src={city.image} alt={city.name} className={styles.image} />
      <div className={styles.title}>{city.name}</div>
    </div>
  );
};

export { CityCard };
