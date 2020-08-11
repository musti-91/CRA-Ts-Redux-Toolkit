import { ISystemState } from 'types/store/system.types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ISystemState = {
  booting: false,
  ready: false,
  error: undefined,
};

const { actions, reducer } = createSlice({
  name: 'system',
  initialState,
  reducers: {
    systemStart: (state, _): any => ({ ...state, booting: true }),
    systemReady: (state, _): any => ({ ...state, ready: true, booting: false }),
    systemFail: (state, { payload }): any => ({
      ...state,
      booting: false,
      ready: false,
      error: payload,
    }),
    resetStore: (state, _) => ({ ...state, error: undefined, booting: false, ready: false }),
  },
});

export const { systemFail, systemReady, systemStart, resetStore } = actions;
export default reducer;
