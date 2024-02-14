// components/EventCard.jsx
import React, { useEffect, useState } from 'react';
import { getMapQuestData } from '../utils/queries';
import { useMutation } from '@apollo/client'; 
import { JOIN_EVENT } from '../utils/mutations';

const handleJoinEvent = async () => {
  try {
    // Call the joinEvent mutation here
    await joinEventMutation({
      variables: {
        userId: currentUser.id,
        sportId: event._id
      }
    });
    // Optionally, you can perform additional logic after joining the event
    console.log('Successfully joined the event!');
  } catch (error) {
    console.error('Error joining the event:', error);
  }
};

const EventCard = ({ event }) => {
  const [locationImage, setLocationImage] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const [joinEvent] = useMutation(JOIN_EVENT);

  useEffect(() => {
    const fetchLocationImage = async () => {
      try {
        const locationData = await getMapQuestData(event.location);
        if (locationData && locationData.results && locationData.results[0]) {
          const { latLng } = locationData.results[0].locations[0];
          setLatitude(latLng.lat);
          setLongitude(latLng.lng);
          const mapImage = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude-0.1}%2C${latitude-0.1}%2C${longitude+0.1}%2C${latitude+0.1}&amp;layer=mapnik`;
          setLocationImage(mapImage);
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationImage();
  }, [event.location]);

  return (
    <div className="card eventscard1">
      <div className="card-body">
        <h5 className="card-title">{event.name}</h5>
        <p className="card-text">Event Type: {event.eventType}</p>
        <p className="card-text">Players: {event.players}</p>
        <p className="card-text">Event Text: {event.eventText}</p>
        <p className="card-text">DateTime: {event.DateTime}</p>
        {locationImage && (
          <div className="location-image">
            <iframe width="100%" height="300" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src={locationImage}></iframe>
            <p>{event.location}</p>
          </div>      
        )}
        <button onClick={joinEvent} className="btn btn-primary">Join Event</button>
      </div>
    </div>
  );
};

export default EventCard;
