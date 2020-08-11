import React from "react";
import store from "store";
import { withRedux } from "packages/redux";

export default function (BaseComponent: React.ReactNode) {
  return withRedux(BaseComponent, store);
}
