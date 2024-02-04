// client/pages/CreateEvent.jsx

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Assuming you're using React Router for navigation
import { getGoogleMapsData } from '../sepo/utils/api';

const CreateEvent = () => {
  const history = useHistory();

  // State to store form inputs
  const [sport, setSport] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');

  // Handle sport selection
  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  // Handle date and time input
  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  // Handle location input with Google Maps API
  const handleLocationChange = async (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);

    // Fetch Google Maps data based on the entered location
    const googleMapsData = await getGoogleMapsData(newLocation);

    // Use the Google Maps data as needed
    console.log('Google Maps Data:', googleMapsData);
  };

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
          <input type="text" value={location} onChange={handleLocationChange} />
        </label>

        {/* Submit Button */}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;