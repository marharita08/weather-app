import { SearchDropdownItem } from "@/components/search-dropdown-item/search-dropdown-item";

import styles from "./search-dropdown.module.css";

type Properties = {
  items: string[];
};

const SearchDropdown: React.FC<Properties> = ({ items }) => {
  return (
    <div className={styles.searchDropdown}>
      {items && items.length > 0 ? (
        items.map(item => <SearchDropdownItem title={item} />)
      ) : (
        <div className={styles.notFound}>
          City not found, please try to change your search query
        </div>
      )}
    </div>
  );
};

export { SearchDropdown };
