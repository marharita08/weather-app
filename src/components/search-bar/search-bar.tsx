import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import searchIcon from "@/assets/search-icon.svg";
import { SearchDropdown } from "@/components/search-dropdown/search-dropdown";
import { actions as citiesActions } from "@/store/cities/cities";
import { AppDispatch, RootState } from "@/store/store";
import { DataStatus } from "@/enums/data-status.enum";
import { Theme } from "@/enums/theme.enum";

import baseStyles from "./search-bar-base.module.css";
import dayStyles from "./search-bar-day.module.css";
import nightStyles from "./search-bar-night.module.css";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const { cities, dataStatus } = useSelector((state: RootState) => ({
    cities: state.cities.cities,
    dataStatus: state.cities.dataStatus
  }));

  const dispatch: AppDispatch = useDispatch();

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        dispatch(citiesActions.unsetCities());
      }
      setSearchQuery(e.target.value);
    },
    [dispatch]
  );

  const handleSearch = useCallback(() => {
    dispatch(citiesActions.findCities(searchQuery));
  }, [dispatch, searchQuery]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const isLoading = dataStatus === DataStatus.PENDING;
  const isIdle = dataStatus === DataStatus.IDLE;

  const { theme } = useSelector((state: RootState) => ({
    theme: state.theme.theme
  }));

  const themeStyles = theme === Theme.DAY ? dayStyles : nightStyles;

  return (
    <div className={baseStyles.searchContainer}>
      <div className={baseStyles.searchBar}>
        <input
          className={baseStyles.searchInput}
          placeholder="Start typing to search..."
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={`${baseStyles.searchButton} ${themeStyles.searchButton}`}
          onClick={handleSearch}
        >
          <img src={searchIcon} />
        </button>
      </div>
      {!isIdle && <SearchDropdown cities={cities} isLoading={isLoading} />}
    </div>
  );
};

export { SearchBar };
