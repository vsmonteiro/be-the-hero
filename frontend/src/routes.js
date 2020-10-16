import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logon from "./components/Logon";
import Register from "./components/Register";
import Profile from "./components/Profile";
import NewIncident from "./components/NewIncident";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Logon} path='/' exact />
        <Route component={Register} path='/register' />
        <Route component={Profile} path='/profile' />
        <Route component={NewIncident} path='/incidents/new' />
      </Switch>
    </BrowserRouter>
  );
}
