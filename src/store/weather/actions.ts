import { createAsyncThunk } from "@reduxjs/toolkit";

import { Weather } from "@/types/weather.type";

import { AsyncThunkConfig } from "../async-thunk-config";

const sliceName = "weather";

const getWeather = createAsyncThunk<Weather, number, AsyncThunkConfig>(
  `${sliceName}/get-weather`,
  async (payload, { extra }) => {
    const { weatherService } = extra;

    return await weatherService.get(payload);
  }
);

export { getWeather };
