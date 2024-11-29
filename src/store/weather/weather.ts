import { actions } from "./weather.slice";
import { getWeather } from "./actions";

const allActions = {
  ...actions,
  getWeather
};

export { allActions as actions };
export { reducer } from "./weather.slice";
