import { WeatherService } from "@/services/weather-service";

import { type AppDispatch, type RootState } from "./store";

export type AsyncThunkConfig = {
  state: RootState;
  dispatch: AppDispatch;
  extra: {
    weatherService: WeatherService;
  };
};
