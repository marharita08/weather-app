import { useDispatch } from "react-redux";
import { useCallback } from "react";

import { City } from "@/types/city.type";
import { actions as weatherActions } from "@/store/weather/weather";
import { actions as citiesActions } from "@/store/cities/cities";
import { AppDispatch } from "@/store/store";

import styles from "./search-dropdown-item.module.css";

type Properties = {
  city: City;
};

const SearchDropdownItem: React.FC<Properties> = ({ city }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(weatherActions.getWeather(city.id));
    dispatch(citiesActions.unsetCities());
  }, [dispatch, city]);

  return (
    <div
      className={styles.item}
      onClick={handleClick}
    >{`${city.name}, ${city.country}`}</div>
  );
};

export { SearchDropdownItem };
