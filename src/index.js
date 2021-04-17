import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App";
import { EventsContextProvider } from "./store/events-context";

import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <EventsContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EventsContextProvider>,
  document.querySelector("#root")
);
