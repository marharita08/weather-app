import { ChangeEvent, useCallback, useRef, useState } from "react";
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

const ENTER_KEY = "Enter";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { cities, dataStatus } = useSelector((state: RootState) => ({
    cities: state.cities.cities,
    dataStatus: state.cities.dataStatus
  }));

  const dispatch: AppDispatch = useDispatch();

  const handleSearchChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value) {
        dispatch(citiesActions.loadCities());
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
      if (event.key === ENTER_KEY) {
        handleSearch();
      }
    },
    [handleSearch]
  );

  const isLoading = dataStatus === DataStatus.PENDING;

  const { theme } = useSelector((state: RootState) => ({
    theme: state.theme.theme
  }));

  const themeStyles = theme === Theme.DAY ? dayStyles : nightStyles;

  const handleInputFocus = useCallback(() => setIsInputFocused(true), []);
  const handleInputBlur = useCallback(() => setIsInputFocused(false), []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
    },
    []
  );

  const blurInput = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }, []);

  return (
    <div className={baseStyles.searchContainer}>
      <div className={baseStyles.searchBar}>
        <input
          ref={inputRef}
          className={baseStyles.searchInput}
          placeholder="Start typing to search..."
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        <button
          type="button"
          className={`${baseStyles.searchButton} ${themeStyles.searchButton}`}
          onClick={handleSearch}
          onMouseDown={handleMouseDown}
        >
          <img src={searchIcon} />
        </button>
      </div>
      {isInputFocused && (isLoading || cities) && (
        <SearchDropdown
          cities={cities}
          isLoading={isLoading}
          blurInput={blurInput}
        />
      )}
    </div>
  );
};

export { SearchBar };
