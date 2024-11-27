import styles from "./search-dropdown-item.module.css";

type Properties = {
  title: string;
};

const SearchDropdownItem: React.FC<Properties> = ({ title }) => {
  return <div className={styles.item}>{title}</div>;
};

export { SearchDropdownItem };
