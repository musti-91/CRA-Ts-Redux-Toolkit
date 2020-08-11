import { IAuthState } from 'types/store/auth.types';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAccessToken } from './auth.actions';

const initialState: IAuthState = {
  accessToken: undefined,
  refreshToken: undefined,
};

const { reducer, actions } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokens: (state, { payload }) => ({
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
    }),
    // fetchTokenStart: (state) => ({ ...state }),
    // fetchTokenSuccess: (state, { payload }) => ({
    //   ...state,
    //   accessToken: payload.accessToken,
    //   refreshToken: payload.refreshToken,
    // }),
    // fetchTokenFailure: (state, _) => ({
    //   ...state,
    //   accessToken: undefined,
    //   refreshToken: undefined,
    // }),
    refreshTokenStart: (state, _) => ({ ...state }),
    refreshTokenSuccess: (state, _) => ({ ...state }),
    refreshTokenFailure: (state, _) => ({ ...state }),
  },
  extraReducers: {
    // @ts-ignore
    [fetchAccessToken.fulfilled]: (state, { payload }) => ({
      ...state,
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
    }),
    // @ts-ignore
    [fetchAccessToken.rejected]: (state) => ({
      ...state,
      accessToken: undefined,
      refreshToken: undefined,
    }),
  },
});

export const { setTokens, refreshTokenFailure, refreshTokenStart, refreshTokenSuccess } = actions;
export default reducer;
