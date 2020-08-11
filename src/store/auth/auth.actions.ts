import { createAsyncThunk } from '@reduxjs/toolkit';

import { IAuthState } from 'types/store/auth.types';

import { apiService } from 'services';
// thunk
export const fetchAccessToken = createAsyncThunk<IAuthState, string>(
  'auth/fetchAccessToken',
  async (code): Promise<IAuthState> => {
    const response = await apiService.getAccessToken(code);
    return (await response.data) as IAuthState;
  },
);
