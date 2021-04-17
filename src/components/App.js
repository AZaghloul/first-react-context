import React from "react";
import Navbar from "./Navbar";
import Event from "./Event";
import EventsListing from "./EventsListing";
import { Route, Switch } from "react-router";
import AllEvents from "../pages/AllEvents";
import MyEvents from "../pages/MyEvents";

const App = () => {
  return (
    <div>
      <Navbar />
      <main className="container">
        <Switch>
          <Route path="/" exact>
            <AllEvents />
          </Route>
          <Route path="/my-events" exact>
            <MyEvents />
          </Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
