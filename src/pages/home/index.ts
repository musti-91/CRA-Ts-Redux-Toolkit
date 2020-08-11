import React from 'react';
import { ROUTE } from '../routes.constants';

const ComponentRef = import('./home');

const Component = React.lazy(() => ComponentRef);

export default {
  component: Component,
  exact: true,
  path: ROUTE.ROOT,
};
