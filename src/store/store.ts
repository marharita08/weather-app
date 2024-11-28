import { configureStore } from "@reduxjs/toolkit";

import weatherService from "@/services/weather-service";
import cityService from "@/services/city-service";

import { reducer as weatherReducer } from "./weather/weather";
import { reducer as citiesReducer } from "./cities/cities";

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    cities: citiesReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          weatherService,
          cityService
        }
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
