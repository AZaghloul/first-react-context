import React, { useContext } from "react";

import EventsListing from "../components/EventsListing";
import EventsContext from '../store/events-context';

const MyEvents = (props) => {
  const ctx = useContext(EventsContext);
  return (
    <EventsListing
      events={ctx.events}
    />
  );
};

export default MyEvents;
