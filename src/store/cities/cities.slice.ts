import { createSlice } from "@reduxjs/toolkit";

import { ValueOf } from "@/types/value-of.type";
import { DataStatus } from "@/enums/data-status.enum";
import { City } from "@/types/city.type";
import { StorageKey } from "@/enums/storage-key.enum";
import localStorageService from "@/services/local-storage-service";

import { findCities } from "./actions";

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
    loadCities(state) {
      state.cities = localStorageService.getItem(StorageKey.CITIES);
    },
    refreshCitiesAndAdd(state, action) {
      state.dataStatus = initialState.dataStatus;
      let cities = localStorageService.getItem<City[]>(StorageKey.CITIES);
      if (!cities) {
        cities = [];
      }
      cities = [
        action.payload,
        ...cities.filter(city => city.id !== action.payload.id)
      ];

      if (cities.length > 5) {
        cities = cities.slice(0, 5);
      }
      state.cities = cities;
      localStorageService.setItem(StorageKey.CITIES, state.cities);
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
