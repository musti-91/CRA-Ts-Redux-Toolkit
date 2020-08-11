import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import systemReducer from './system';
import intlReducer from './intl';
import authReducer from './auth';

export const reducers = {
  system: systemReducer,
  intl: intlReducer,
  auth: persistReducer({ key: 'auth', storage }, authReducer),
};
