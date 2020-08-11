import { getDefaultMiddleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { Middleware } from 'redux';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const logger: Middleware = createLogger({
  collapsed: true,
  level: 'info',
});

const middlewares = [
  ...getDefaultMiddleware({
    /**
     * Ignore actions checks that all came from redux-persit
     * ! Turning this Off not recommended
     * See: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data
     */
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

if (process.env.NODE_ENV !== 'production' && typeof window !== undefined) {
  middlewares.push(logger);
}

export default middlewares;
