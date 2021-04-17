import React from "react";
import Event from "./Event";

const EventsListing = (props) => {
  return (
    <div className="d-flex justify-content-between my-2">
      {props.events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventsListing;
