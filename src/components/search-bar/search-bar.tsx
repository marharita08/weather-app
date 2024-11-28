import { ChangeEvent, useCallback, useState } from "react";

import searchIcon from "@/assets/search-icon.svg";
import { City } from "@/types/city.type";
import cityService from "@/services/city-service";
import { SearchDropdown } from "../search-dropdown/search-dropdown";

import styles from "./search-bar.module.css";


const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [cities, setCities] = useState<City[]|null>(null);

  const handleSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setCities(null);
    }
    setSearchQuery(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    const fetchCities = async () => {
      setCities(await cityService.find(searchQuery));
    }
    fetchCities();
  }, [searchQuery]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <input
          className={styles.searchInput}
          placeholder="Start typing to search..."
          onChange={handleSearchChange}
        />
        <button type="button" className={styles.searchButton} onClick={handleSearch}>
          <img src={searchIcon} />
        </button>
      </div>
      {
        cities && <SearchDropdown cities={cities} />
      }
    </div>
  );
};

export { SearchBar };
