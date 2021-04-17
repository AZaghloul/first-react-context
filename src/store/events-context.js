import { createContext, useState } from "react";

const EventsContext = createContext({
  events: [],
  totalEvents: 0,
  addEvent: () => {},
  removeEvent: () => {},
  isInMyEvents: () => {},
});

export function EventsContextProvider(props) {
  const [userEvents, setUserEvents] = useState([]);

  function addToMyEvents(event) {
    setUserEvents((usrEvents) => [...usrEvents, event]);
  }

  function removeFromMyEvents(eventId) {
    setUserEvents((usrEvents) => usrEvents.filter((e) => e.id !== eventId));
  }

  function isInMyEvents(eventId) {
    return userEvents.some((e) => e.id === eventId);
  }

  const context = {
    events: userEvents,
    totalEvents: userEvents.length,
    addEvent: addToMyEvents,
    removeEvent: removeFromMyEvents,
    isInMyEvents: isInMyEvents,
  };

  return (
    <EventsContext.Provider value={context}>
      {props.children}
    </EventsContext.Provider>
  );
}

export default EventsContext;
