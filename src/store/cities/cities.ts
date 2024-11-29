import { actions } from "./cities.slice";
import { findCities } from "./actions";

const allActions = {
  ...actions,
  findCities
};

export { allActions as actions };
export { reducer } from "./cities.slice";
