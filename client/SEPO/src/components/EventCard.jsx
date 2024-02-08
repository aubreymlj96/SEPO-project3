import React from 'react';

const EventCard = ({ event, onJoin }) => {
  const { sport, dateTime, location } = event;

  const handleJoinClick = () => {
    // Call the onJoin function passed as a prop
    onJoin(event.id); // Assuming event has an id property
  };

  return (
    <div className="event-card">
      <h2>{sport}</h2>
      <p>Date and Time: {dateTime}</p>
      <p>Location: {location}</p>
      <button onClick={handleJoinClick}>Join Event</button>
    </div>
  );
};

export default EventCard;