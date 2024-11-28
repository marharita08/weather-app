import { createSlice } from "@reduxjs/toolkit";

import { ValueOf } from "@/types/value-of.type";
import { DataStatus } from "@/enums/data-status.enum";

import { findCities } from "./actions";
import { City } from "@/types/city.type";

type State = {
  cities: City[] | null;
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  cities: null,
  dataStatus: DataStatus.IDLE
};

const { actions, reducer } = createSlice({
  name: "cities",
  initialState,
  reducers: {
    unsetCities(state) {
      state.cities = initialState.cities;
      state.dataStatus = initialState.dataStatus;
    }
  },
  extraReducers(builder) {
    builder.addCase(findCities.pending, state => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(findCities.fulfilled, (state, action) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.cities = action.payload;
    });
    builder.addCase(findCities.rejected, state => {
      state.dataStatus = DataStatus.REJECTED;
    });
  }
});

export { actions, reducer };
