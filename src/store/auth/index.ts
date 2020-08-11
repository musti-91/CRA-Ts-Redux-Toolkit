import { IAuthState } from 'types/store/auth.types';
import { createSlice } from '@reduxjs/toolkit';

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
    fetchTokenStart: (state, _) => ({ ...state }),
    fetchTokenSuccess: (state, { payload }) => ({
      ...state,
      accessToken: payload.accessToken,
      refreshToken: payload.refreshToken,
    }),
    fetchTokenFailure: (state, _) => ({
      ...state,
      accessToken: undefined,
      refreshToken: undefined,
    }),
    refreshTokenStart: (state, _) => ({ ...state }),
    refreshTokenSuccess: (state, _) => ({ ...state }),
    refreshTokenFailure: (state, _) => ({ ...state }),
  },
});

export const {
  setTokens,
  fetchTokenFailure,
  fetchTokenStart,
  fetchTokenSuccess,
  refreshTokenFailure,
  refreshTokenStart,
  refreshTokenSuccess,
} = actions;
export default reducer;
