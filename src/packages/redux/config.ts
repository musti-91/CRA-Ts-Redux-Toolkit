import { combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import _merge from 'lodash/merge';

import { Store } from 'redux';

type Optional<T> = { [P in keyof T]?: T[P] };

interface IOptions {
  enableDevTools: string | boolean;
  persistConfig?: Optional<any>;
  onBeforeLift?: (store: Store) => void;
}

const defaultOptions: IOptions = {
  enableDevTools: process.env.NODE_ENV !== 'production',
  persistConfig: {
    key: 'auth',
    storage,
  },
  onBeforeLift: (store) => {},
};

// let devToolsExtension = (f: any) => f;

const generateStore = (reducers: any, options: IOptions) => {
  const mergeOptions: any = _merge(defaultOptions, options);

  // if (
  //   mergeOptions.enableDevTools &&
  //   (global as any).window &&
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__
  // ) {
  //   devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__;
  // }

  const middleware = getDefaultMiddleware().concat(createLogger());

  const rootReducer = combineReducers(reducers);

  /**
   * Todo
   * Should handle reset store case
   */

  const rootReducers = persistReducer(mergeOptions.persistConfig, rootReducer);

  const store = configureStore({
    reducer: rootReducers,
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
