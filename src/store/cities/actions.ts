import { createAsyncThunk } from "@reduxjs/toolkit";

import { City } from "@/types/city.type";

import { AsyncThunkConfig } from "../async-thunk-config";

const sliceName = "cities";

const findCities = createAsyncThunk<City[], string, AsyncThunkConfig>(
  `${sliceName}/find-cities`,
  async (payload, { extra }) => {
    const { cityService } = extra;

    return await cityService.find(payload);
  }
);

export { findCities };
