// components/EventCard.jsx

import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="card eventscard1">
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">Event Type: {event.eventType}</p>
        <p className="card-text">Players: {event.players}</p>
        <p className="card-text">Event Text: {event.eventText}</p>
        {/* You can include more details here */}
      </div>
    </div>
  );
};



export default EventCard;
