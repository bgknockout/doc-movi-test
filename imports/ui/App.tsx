import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from '../components/NavBar'
import Menu from "../pages/Menu";
import NotFound from "../pages/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
