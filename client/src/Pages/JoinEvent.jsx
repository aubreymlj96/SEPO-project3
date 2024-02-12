import React from 'react';
import { useQuery } from '@apollo/client'; // Import useQuery hook
import EventCard from '../components/EventCard';
import { GET_EVENTS } from '../utils/queries'; // Import the GraphQL query for fetching events

const JoinEvent = () => {
  const { loading, error, data } = useQuery(GET_EVENTS); // Use the useQuery hook to execute the GraphQL query

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  const events = data.events || [];

  return (
    <div>
      <h1>Join Events</h1>
      {events.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default JoinEvent;
