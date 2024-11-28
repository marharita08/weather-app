import { WeatherService } from "@/services/weather-service";

import { type AppDispatch, type RootState } from "./store";
import { CityService } from "@/services/city-service";

export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    weatherService: WeatherService;
    cityService: CityService;
  };
};
