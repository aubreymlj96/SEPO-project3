import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

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
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h1 className="card-title text-center mb-4">Create an Event</h1>
              <form onSubmit={handleSubmit}>
                {/* Sport Selection */}
                <div className="form-group">
                  <label htmlFor="sport">Choose a sport:</label>
                  <select className="form-control" id="sport" value={sport} onChange={handleSportChange}>
                    <option value="">Select a sport</option>
                    <option value="soccer">Soccer</option>
                    <option value="football">Football</option>
                    <option value="baseball">Baseball</option>
                    <option value="basketball">Basketball</option>
                  </select>
                </div>
      
                {/* Date and Time Input */}
                <div className="form-group">
                  <label htmlFor="dateTime">Date and Time:</label>
                  <input className="form-control" id="dateTime" type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
                </div>
      
                {/* Location Input */}
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  <input className="form-control" id="location" type="text" value={location} onChange={handleLocationChange} />
                </div>
      
                {/* Submit Button */}
                <button className="btn btn-primary btn-block" type="submit">Create Event</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  
  
  
  
};

// Add prop types validation
CreateEvent.propTypes = {
  onCreateEvent: PropTypes.func.isRequired, // Ensure onCreateEvent is a function and is required
};

export default CreateEvent;
