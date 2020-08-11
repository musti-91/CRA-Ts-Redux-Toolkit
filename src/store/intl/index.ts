import config from "config";
import { createSlice } from "@reduxjs/toolkit";

import { IIntlState } from "types/store/intl.types";

const initialState: IIntlState = {
  locale: config.DEFAULT_LOCALE,
};

const { reducer, actions } = createSlice({
  initialState,
  name: "locale",
  reducers: {
    uploadLocale: (state, { payload }) => ({
      ...state,
      locale: payload.locale,
    }),
  },
});
export const { uploadLocale } = actions;
export default reducer;
