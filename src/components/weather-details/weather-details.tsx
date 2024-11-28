import { useSelector } from "react-redux";

import { RootState } from "@/store/store";
import { DataStatus } from "@/enums/data-status.enum";
import { getFormattedCurrentDate } from "@/helpers/get-formatted-current-date";
import { envConfig } from "@/configs/env-config";

import styles from "./weather-details.module.css";
import { Loader } from "../loader/loader";

const WeatherDetailes: React.FC = () => {
  const { weather, dataStatus } = useSelector((state: RootState) => ({
    weather: state.weather.weather,
    dataStatus: state.weather.dataStatus
  }));

  const isLoading = dataStatus === DataStatus.PENDING;
  const isIdle = dataStatus === DataStatus.IDLE;
  const date = getFormattedCurrentDate();

  return (
    <>
      {!isIdle && (
        <div className={styles.weatherDetails}>
          {isLoading ? (
            <Loader />
          ) : (
            weather && (
              <>
                <div className={styles.cardBody}>
                  <div className={styles.weatherInfo}>
                    <div className={styles.icon}>
                      <img
                        src={`${envConfig.apiIconUrl}${weather.icon}@2x.png`}
                      />
                    </div>
                    <div className={styles.currentWeather}>
                      <div className={styles.temperature}>{weather.temp}°C</div>
                      <div className={styles.weatherName}>{weather.title}</div>
                      <div className={styles.weatherDescription}>
                        {weather.description}
                      </div>
                    </div>
                  </div>
                  <div className={styles.locationAndDate}>
                    <div
                      className={styles.location}
                    >{`${weather.city}, ${weather.country}`}</div>
                    <div className={styles.date}>{date}</div>
                  </div>
                </div>
                <div className={styles.horizontalDivider}></div>
                <div className={styles.cardFooter}>
                  <div className={styles.minMaxTemp}>
                    <div className={styles.tempTitle}>Min</div>
                    <div className={styles.temperature}>
                      {weather.tempMin}°C
                    </div>
                  </div>
                  <div className={styles.verticalDivider}></div>
                  <div className={styles.minMaxTemp}>
                    <div className={styles.tempTitle}>Max</div>
                    <div className={styles.temperature}>
                      {weather.tempMax}°C
                    </div>
                  </div>
                </div>
              </>
            )
          )}
        </div>
      )}
    </>
  );
};

export { WeatherDetailes };
