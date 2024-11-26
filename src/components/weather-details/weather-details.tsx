import styles from "./weather-details.module.css";

const WeatherDetailes: React.FC = () => {
  return <div className={styles.weatherDetails}>
    <div className={styles.cardBody}>
      <div className={styles.weatherInfo}>
        <div className={styles.icon}>icon</div>
        <div className={styles.currentWeather}>
          <div className={styles.temperature} >+23</div>
          <div className={styles.weatherName} >Drizzle</div>
          <div className={styles.weatherDescription} >Light intensity drizzle</div>
        </div>
      </div>
      <div className={styles.locationAndDate}>
        <div className={styles.location}>Odessa, Ukraine</div>
        <div className={styles.date}>10 March 2020</div>
      </div>
    </div>
    <div className={styles.horizontalDivider}></div>
    <div className={styles.cardFooter}>
      <div className={styles.minMaxTemp}>
        <div className={styles.tempTitle}>Min</div>
        <div className={styles.temperature}>-33</div>
      </div>
      <div className={styles.verticalDivider}></div>
      <div className={styles.minMaxTemp}>
        <div className={styles.tempTitle}>Max</div>
        <div className={styles.temperature} >+33</div>
      </div>
    </div>
    
  </div>
} 

export { WeatherDetailes };
