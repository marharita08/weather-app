import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { type City } from "@/types/city.type";
import { actions as weatherActions } from "@/store/weather/weather";
import { actions as citiesActions } from "@/store/cities/cities";
import { AppDispatch, RootState } from "@/store/store";

import baseStyles from "./search-dropdown-item-base.module.css";
import dayStyles from "./search-dropdown-item-day.module.css";
import nightStyles from "./search-dropdown-item-night.module.css";
import { Theme } from "@/enums/theme.enum";

type Properties = {
  city: City;
};

const SearchDropdownItem: React.FC<Properties> = ({ city }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(weatherActions.getWeather(city.id));
    dispatch(citiesActions.unsetCities());
  }, [dispatch, city]);

  const { theme } = useSelector((state: RootState) => ({
    theme: state.theme.theme
  }));

  const themeStyles = theme === Theme.DAY ? dayStyles : nightStyles;

  return (
    <div
      className={`${baseStyles.item} ${themeStyles.item}`}
      onClick={handleClick}
    >{`${city.name}, ${city.country}`}</div>
  );
};

export { SearchDropdownItem };
