// client/pages/CreateEvent.jsx

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getMapQuestData } from '../../utils/api'; // Import your MapQuest API function

const CreateEvent = () => {
  const history = useHistory();

  // State to store form inputs
  const [sport, setSport] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');
  const [map, setMap] = useState(null);

  // Handle sport selection
  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  // Handle date and time input
  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  // Handle location input with MapQuest Autocomplete
  const handleLocationChange = async (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);

    // Fetch MapQuest data based on the entered location
    const mapQuestData = await getMapQuestData(newLocation);

    // Use the MapQuest data as needed
    console.log('MapQuest Data:', mapQuestData);

    // Update the map with the new location (assuming 'map' is a MapQuest object)
    if (map && mapQuestData.results && mapQuestData.results[0]) {
      const { lat, lng } = mapQuestData.results[0].locations[0].latLng;
      setMap((prevMap) => {
        if (prevMap) {
          prevMap.setCenter({ lat, lng });
        }
        return prevMap;
      });
    }
  };

  // Initialize MapQuest Autocomplete once the component is mounted
  useEffect(() => {
    // Initialize the Autocomplete service
    const placesAutocomplete = places({
      key: 'YShBjYux21G3IIZulMOwJ1UqYpLaPAdx',
      container: document.getElementById('location-input'),
      language: 'en',
    });

    // Listen for the 'change' event
    placesAutocomplete.on('change', (e) => {
      const place = e.suggestion;
      console.log('Selected Place:', place);

      if (place.latlng) {
        const { lat, lng } = place.latlng;
        setMap((prevMap) => {
          if (prevMap) {
            prevMap.setCenter({ lat, lng });
          }
          return prevMap;
        });
      }
    });
  }, []);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation on the form inputs

    // Example: Post the event data to the server (replace with actual API call)
    // Assume there's an API endpoint for creating events
    // You should adapt this part based on your server API
    fetch('http://your-api-url/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sport,
        dateTime,
        location,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Event created successfully:', data);
        // Redirect to the event details page or update the UI as needed
        history.push(`/events/${data.eventId}`);
      })
      .catch((error) => {
        console.error('Error creating event:', error);
      });
  };

  return (
    <div>
      <h1>Create an Event</h1>
      <form onSubmit={handleSubmit}>
        {/* Sport Selection */}
        <label>
          Choose a sport:
          <select value={sport} onChange={handleSportChange}>
            <option value="football">Football</option>
            <option value="soccer">Soccer</option>
            <option value="basketball">Basketball</option>
            <option value="volleyball">Volleyball</option>
          </select>
        </label>

        {/* Date and Time Input */}
        <label>
          Date and Time:
          <input type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
        </label>

        {/* Location Input */}
        <label>
          Location:
          <input id="location-input" type="text" value={location} onChange={handleLocationChange} />
        </label>

        {/* Map Display */}
        <div id="map" style={{ width: '100%', height: '300px', marginBottom: '10px' }} />

        {/* Submit Button */}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
