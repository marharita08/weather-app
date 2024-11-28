import { createAsyncThunk } from "@reduxjs/toolkit";

import { name as sliceName } from "./weather.slice";
import { AsyncThunkConfig } from "../async-thunk-config";
import { Weather } from "@/types/weather.type";

const getWeather = createAsyncThunk<Weather, number, AsyncThunkConfig>(
  `${sliceName}/get-weather`,
  async (payload, { extra }) => {
    const { weatherService } = extra;

    return await weatherService.get(payload);
  }
);

export { getWeather };
