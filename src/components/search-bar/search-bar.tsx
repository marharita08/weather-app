import searchIcon from "@/assets/search-icon.svg";

import styles from "./search-bar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.searchInput}
        placeholder="Start typing to search..."
      />
      <button type="button" className={styles.searchButton}>
        <img src={searchIcon} />
      </button>
    </div>
  );
};

export { SearchBar };
