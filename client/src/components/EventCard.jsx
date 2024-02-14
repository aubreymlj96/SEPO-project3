// components/EventCard.jsx
import React, { useEffect, useState } from 'react';
import { getMapQuestData } from '../utils/queries';

const EventCard = ({ event }) => {
  const [locationImage, setLocationImage] = useState(null);

  useEffect(() => {
    const fetchLocationImage = async () => {
      try {
        // Fetch location data using the getMapQuestData function
        const locationData = await getMapQuestData(event.location);
        if (locationData && locationData.results && locationData.results[0]) {
          const { displayString, place } = locationData.results[0];
          setLocationImage(place?.photoUrl || null);
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
        {locationImage && (
          <div className="location-image">
            {/* Render the location image */}
            <img src={locationImage} alt="Location" />
            <p>{event.location}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;

