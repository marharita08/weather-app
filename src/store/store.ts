import { configureStore } from "@reduxjs/toolkit";

import weatherService from "@/services/weather-service";

import { reducer as weatherReducer } from "./weather/weather.slice";

const store = configureStore({
  reducer: {
    weather: weatherReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          weatherService
        }
      }
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
