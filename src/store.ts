import {
  createAsyncThunk,
  createSlice,
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
// types
export interface IAuthState {
  loading?: boolean;
  accessToken?: string;
  refreshToken?: string;
  error?: any;
}

export interface IStoreType {
  auth: IAuthState;
}
// * state
const initialState: IAuthState = {
  loading: false,
  accessToken: undefined,
  refreshToken: undefined,
  error: null,
};

const getAccessToken = async (code: string): Promise<any> => {
  return Promise.resolve({
    data: {
      accessToken: "Access token " + code,
      refreshToken: "this is refresh token",
    },
  });
};
// thunk
export const fetchAccessToken = createAsyncThunk<IAuthState, string, any>(
  "auth/fetchAccessToken",
  async (code): Promise<IAuthState> => {
    const response = await getAccessToken(code);
    return (await response.data) as IAuthState;
  }
);

// * REDUCER
const { reducer } = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    // @ts-ignore
    [fetchAccessToken.pending]: (state, _) => ({
      ...state,
      loading: true,
    }),
    // @ts-ignore
    [fetchAccessToken.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        loading: false,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    },
    // @ts-ignore
    [fetchAccessToken.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload.error,
    }),
  },
});
const rootReducer = combineReducers({
  auth: reducer,
});

const middleswares = [createLogger()];

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(middleswares),
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
