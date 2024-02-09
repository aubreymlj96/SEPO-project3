import React, { useState } from 'react';
import EventCard from '../components/EventCard';  // Adjust the import based on your project structure

const JoinEvent = () => {
  // Example state for user-entered events
  const [events, setEvents] = useState([
    { id: 1, name: 'Football Game', location: 'Park A', time: '2024-02-01T18:00:00' },
    { id: 2, name: 'Basketball Match', location: 'Court B', time: '2024-02-02T15:30:00' },
    // Add more events as users enter them
  ]);

  return (
    <div>
      <h1>Join Events</h1>
      {events.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default JoinEvent;