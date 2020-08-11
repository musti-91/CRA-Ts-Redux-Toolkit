import React from 'react';

import { ROUTE } from '../routes.constants';

const componentRef = import('./Callback');

export default {
  component: React.lazy(() => componentRef),
  exact: true,
  path: ROUTE.CALLBACK,
};
