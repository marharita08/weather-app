import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import { type City } from "@/types/city.type";
import { actions as weatherActions } from "@/store/weather/weather";
import { actions as citiesActions } from "@/store/cities/cities";
import { AppDispatch, RootState } from "@/store/store";
import { Theme } from "@/enums/theme.enum";

import baseStyles from "./search-dropdown-item-base.module.css";
import dayStyles from "./search-dropdown-item-day.module.css";
import nightStyles from "./search-dropdown-item-night.module.css";

type Properties = {
  city: City;
  blurInput: () => void;
};

const SearchDropdownItem: React.FC<Properties> = ({ city, blurInput }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      dispatch(weatherActions.getWeather(city.id));
      dispatch(citiesActions.refreshCitiesAndAdd(city));
      blurInput();
    },
    [dispatch, city, blurInput]
  );

  const { theme } = useSelector((state: RootState) => ({
    theme: state.theme.theme
  }));

  const themeStyles = theme === Theme.DAY ? dayStyles : nightStyles;

  return (
    <div
      className={`${baseStyles.item} ${themeStyles.item}`}
      onMouseDown={handleMouseDown}
    >{`${city.name}, ${city.country}`}</div>
  );
};

export { SearchDropdownItem };
