import { createAsyncThunk } from "@reduxjs/toolkit";

import { City } from "@/types/city.type";

import { AsyncThunkConfig } from "../async-thunk-config";
import { SLICE_NAME } from "./slice-name";

const findCities = createAsyncThunk<City[], string, AsyncThunkConfig>(
  `${SLICE_NAME}/find-cities`,
  async (payload, { extra }) => {
    const { cityService } = extra;

    return await cityService.find(payload);
  }
);

export { findCities };
