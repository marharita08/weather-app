import { ChangeEvent, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import searchIcon from "@/assets/search-icon.svg";
import { SearchDropdown } from "../search-dropdown/search-dropdown";
import { actions as citiesActions } from "@/store/cities/cities";
import { AppDispatch, RootState } from "@/store/store";

import styles from "./search-bar.module.css";
import { DataStatus } from "@/enums/data-status.enum";

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

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          placeholder="Start typing to search..."
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className={styles.searchButton}
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
