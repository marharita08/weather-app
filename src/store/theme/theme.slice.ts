import { createSlice } from "@reduxjs/toolkit";

import { ValueOf } from "@/types/value-of.type";
import { Theme } from "@/enums/theme.enum";

type State = {
  theme: ValueOf<typeof Theme>;
};

const initialState: State = {
  theme: Theme.DAY
};

const { actions, reducer } = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state) {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 21) {
        state.theme = Theme.DAY;
      } else {
        state.theme = Theme.NIGHT;
      }
    }
  }
});

export { actions, reducer };
