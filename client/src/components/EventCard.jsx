import React from 'react';

const EventCard = ({ event, onJoin }) => {
  const { sport, dateTime, location } = event;

  return (
    <div className="event-card">
      <h3>{sport}</h3>
      <p>Date and Time: {dateTime}</p>
      <p>Location: {location}</p>
      <button onClick={() => onJoin(event.id)}>Join Event</button>
    </div>
  );
};

export default EventCard;