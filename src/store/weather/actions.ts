import { createAsyncThunk } from "@reduxjs/toolkit";

import { Weather } from "@/types/weather.type";

import { AsyncThunkConfig } from "../async-thunk-config";
import { SLICE_NAME } from "./slice-name";

const getWeather = createAsyncThunk<Weather, number, AsyncThunkConfig>(
  `${SLICE_NAME}/get-weather`,
  async (payload, { extra }) => {
    const { weatherService } = extra;

    return await weatherService.get(payload);
  }
);

export { getWeather };
