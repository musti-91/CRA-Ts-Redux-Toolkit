import React from 'react';
import { Router as BrowserRouter } from 'react-router-dom';

import Router from 'pages/Router';
import withConnectors from './connectors';

import history from 'custom-history';
/**
 * @author
 * @class App
 **/

class App extends React.PureComponent<{}> {
  render() {
    return (
      <BrowserRouter history={history}>
        <Router />
      </BrowserRouter>
    );
  }
}

export default withConnectors(App);
