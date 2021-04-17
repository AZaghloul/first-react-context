import React , {useState} from "react";
import EventsListing from "../components/EventsListing";

const AllEvents = (props) => {
  const [events,setEvents] = useState([
    { id: 1, title: "Event1", desc: "DESC1" },
    { id: 2, title: "Event2", desc: "DESC2" },
    { id: 3, title: "Event3", desc: "DESC3" },
    { id: 4, title: "Event4", desc: "DESC4" },
  ]);

  return (
    <EventsListing
      events={events}
    />
  );
};

export default AllEvents;
