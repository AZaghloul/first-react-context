import React, { useContext } from "react";

import EventsContext from "../store/events-context";

const Event = (props) => {
  const ctx = useContext(EventsContext);
  const { id, title, desc } = props.event;

  const addToMyEvents = () => {
    if (ctx.isInMyEvents(id)) {
      ctx.removeEvent(id);
    } else {
      ctx.addEvent(props.event);
    }
  };

  return (
    <div class="card" style={{ width: "45%" }}>
      <img
        src="https://source.unsplash.com/user/erondu"
        className="card-img-top"
        alt="image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <button onClick={addToMyEvents} className="btn btn-primary">
          {ctx.isInMyEvents(id) ? "Remove" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default Event;
