import { SearchDropdownItem } from "@/components/search-dropdown-item/search-dropdown-item";

import styles from "./search-dropdown.module.css";
import { City } from "@/types/city.type";

type Properties = {
  cities: City[];
};

const SearchDropdown: React.FC<Properties> = ({ cities }) => {
  return (
    <div className={styles.searchDropdown}>
      {cities.length > 0 ? (
        cities.map(city => <SearchDropdownItem city={city} />)
      ) : (
        <div className={styles.notFound}>
          City not found, please try to change your search query
        </div>
      )}
    </div>
  );
};

export { SearchDropdown };
