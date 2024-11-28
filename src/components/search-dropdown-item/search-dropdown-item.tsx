import { City } from "@/types/city.type";
import styles from "./search-dropdown-item.module.css";

type Properties = {
  city: City;
};

const SearchDropdownItem: React.FC<Properties> = ({ city }) => {
  return <div className={styles.item}>{`${city.name}, ${city.sys.country}`}</div>;
};

export { SearchDropdownItem };
