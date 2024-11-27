import styles from "./city-card.module.css";

type Properties = {
  title: string,
  image: string,
}

const CityCard: React.FC<Properties> = ({title, image}) => {
  return <div className={styles.card}>
    <img src={image} alt={title} />
    <div className={styles.title}>{title}</div>
  </div>
}

export { CityCard }
