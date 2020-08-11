import _merge from 'lodash/merge';
import { combineReducers, ReducersMapObject } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Store } from 'redux';

import middleware from './middlewares';

type Optional<T> = { [P in keyof T]?: T[P] };

interface IOptions {
  enableDevTools: string | boolean;
  persistConfig?: Optional<any>;
  onBeforeLift?: (store: Store) => void;
}

const defaultOptions: IOptions = {
  enableDevTools: true,
  persistConfig: {
    key: 'root',
    storage,
    version: 1,
    debug: true,
    whilelist: [],
  },
  onBeforeLift: (store) => {},
};

const generateStore = (reducers: ReducersMapObject<{}>, options: IOptions) => {
  const mergeOptions: any = _merge(defaultOptions, options);

  const appReducers = combineReducers(reducers);

  const persistReducers = persistReducer(mergeOptions.persistConfig, appReducers);

  const store = configureStore({
    reducer: persistReducers,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
  });
  const persistor = persistStore(store);

  const onBeforeLift = () => mergeOptions.onBeforeLift(store);

  return {
    store,
    persistor,
    onBeforeLift,
  };
};
export default generateStore;
