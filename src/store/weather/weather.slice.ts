import { createSlice } from "@reduxjs/toolkit";

import { Weather } from "@/types/weather.type";
import { ValueOf } from "@/types/value-of.type";
import { DataStatus } from "@/enums/data-status.enum";

import { getWeather } from "./actions";

type State = {
  weather: Weather | null;
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  weather: null,
  dataStatus: DataStatus.IDLE
};

const { actions, name, reducer } = createSlice({
  name: "superheroes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWeather.pending, state => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.weather = action.payload;
    });
    builder.addCase(getWeather.rejected, state => {
      state.dataStatus = DataStatus.REJECTED;
    });
  }
});

export { actions, name, reducer };
