// client/pages/CreateEvent.jsx

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getGoogleMapsData } from '../sepo/utils/api';

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

  // Handle location input with Google Maps Autocomplete
  const handleLocationChange = async (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);

    // Fetch Google Maps data based on the entered location
    const googleMapsData = await getGoogleMapsData(newLocation);

    // Use the Google Maps data as needed
    console.log('Google Maps Data:', googleMapsData);

    // Update the map with the new location (assuming 'map' is a Google Maps object)
    if (map && googleMapsData.results && googleMapsData.results[0]) {
      const { lat, lng } = googleMapsData.results[0].geometry.location;
      map.setCenter(new window.google.maps.LatLng(lat, lng));
      // You can also add a marker on the map to indicate the selected location
    }
  };

  // Initialize Google Maps Autocomplete once the component is mounted
  useEffect(() => {
    // Check if the Google Maps API is loaded
    if (window.google && window.google.maps) {
      // Initialize the Autocomplete service
      const autocomplete = new window.google.maps.places.Autocomplete(document.getElementById('location-input'));

      // Listen for the 'place_changed' event
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        console.log('Selected Place:', place);

        if (place.geometry) {
          const { lat, lng } = place.geometry.location;
          setMap((prevMap) => {
            if (prevMap) {
              prevMap.setCenter(new window.google.maps.LatLng(lat(), lng()));
            }
            return prevMap;
          });
        }
      });
    }
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
