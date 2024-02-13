import React from 'react';
import { useMutation } from '@apollo/client';
import { JOIN_EVENT } from '../utils/mutations';

const EventCard = ({ event, user }) => {
  const { _id, name, dateTime, location, maxPeople, participants } = event;
  const [joinEvent] = useMutation(JOIN_EVENT);

  const handleJoinEvent = async () => {
    try {
      await joinEvent({ variables: { eventId: _id } });
    } catch (error) {
      console.error('Error joining event:', error);
    }
  };

  const isFull = participants.length >= maxPeople;

  return (
    <div className="event-card">
      <h3>{name}</h3>
      <p>Date and Time: {dateTime}</p>
      <p>Location: {location}</p>
      <p>Participants: {participants.length}/{maxPeople}</p>
      <button onClick={handleJoinEvent} disabled={isFull}>
        {isFull ? 'Event Full' : 'Join Event'}
      </button>
    </div>
  );
};

export default EventCard;
