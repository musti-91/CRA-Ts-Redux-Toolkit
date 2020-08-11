import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import home from "./home";
import callback from "./callback";

interface RouteType {
  path: string;
  component: any;
  exact: boolean;
}
const routes: RouteType[] = [home, callback];
// Todo callback should be the same as home route;

const NotFound = React.lazy(() => import("./not-found"));

const Router = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      {routes.map((route) => (
        <Route {...route} key={route.path} />
      ))}

      <Route component={NotFound}></Route>
    </Switch>
  </Suspense>
);

export default Router;
