// Pages/JoinEvent.jsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../utils/queries';
import EventCard from '../components/EventCard';

const JoinEvent = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);
console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Join Events</h1>
      <div className="event-list">
        {data.events.map(event => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default JoinEvent;
