import { SearchDropdownItem } from "@/components/search-dropdown-item/search-dropdown-item";

import styles from "./search-dropdown.module.css";
import { City } from "@/types/city.type";
import { Loader } from "../loader/loader";

type Properties = {
  cities: City[] | null;
  isLoading: boolean;
  blurInput: () => void;
};

const SearchDropdown: React.FC<Properties> = ({
  cities,
  isLoading,
  blurInput
}) => {
  return (
    <div className={styles.searchDropdown}>
      {isLoading ? (
        <Loader />
      ) : cities && cities.length > 0 ? (
        cities.map(city => (
          <SearchDropdownItem city={city} key={city.id} blurInput={blurInput} />
        ))
      ) : (
        <div className={styles.notFound}>
          City not found, please try to change your search query
        </div>
      )}
    </div>
  );
};

export { SearchDropdown };
