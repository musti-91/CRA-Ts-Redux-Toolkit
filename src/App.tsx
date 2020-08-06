import React from "react";
import { Provider } from "react-redux";

import store from "./store";

import Wrapper from "./Wrapper";

function App() {
  return (
    <Provider store={store}>
      <Wrapper />
    </Provider>
  );
}

export default App;
