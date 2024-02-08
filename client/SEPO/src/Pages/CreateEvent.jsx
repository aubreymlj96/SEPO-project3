import React, { useState } from 'react';

const CreateEvent = ({ onCreateEvent }) => {
  const [sport, setSport] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [location, setLocation] = useState('');

  const handleSportChange = (event) => {
    setSport(event.target.value);
  };

  const handleDateTimeChange = (event) => {
    setDateTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (!sport || !dateTime || !location) {
      alert('Please fill in all fields.');
      return;
    }

    // Create the event object
    const newEvent = {
      sport,
      dateTime,
      location,
    };

    // Call the onCreateEvent function passed as a prop
    onCreateEvent(newEvent);

    // Clear the form fields
    setSport('');
    setDateTime('');
    setLocation('');
  };

  return (
    <div>
      <h1>Create an Event</h1>
      <form onSubmit={handleSubmit}>
        {/* Sport Selection */}
        <label>
          Choose a sport:
          <select value={sport} onChange={handleSportChange}>
            <option value="">Select a sport</option>
            <option value="soccer">Soccer</option>
            <option value="football">Football</option>
            <option value="baseball">Baseball</option>
            <option value="basketball">Basketball</option>
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