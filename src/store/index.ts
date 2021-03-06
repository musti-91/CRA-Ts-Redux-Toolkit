import config from 'config';
import { Store } from 'redux';
import { generateStore } from 'packages/redux';

import { reducers } from './reducers';
import { systemStart } from './system';
import { initServices } from 'services';

function bootApp(store: Store) {
  store.dispatch(systemStart());
  initServices();
}

const storeConfig = generateStore(reducers, {
  enableDevTools: config.ENABLE_DEV_TOOLS,
  persistConfig: {},
  onBeforeLift: bootApp,
});

storeConfig.store.dispatch(systemStart());

export default storeConfig;
