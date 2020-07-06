import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Auth from "./Pages/Auth/Auth";
import Regist from "./Pages/Regist/Regist";

function App() {
  const router = (
    <Switch>
      <Route path="/login" component={Auth} />
      <Route path="/registration" component={Regist} />
      <Redirect to="/login" />
    </Switch>
  );
  return <div>{router}</div>;
}

export default App;
