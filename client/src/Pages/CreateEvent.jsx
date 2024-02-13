// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useMutation } from '@apollo/client';
// import { CREATE_EVENT, GET_EVENTS } from '../utils/queries';
// const CreateEvent = ({ user, onCreateEvent }) => {
//   const [sport, setSport] = useState('');
//   const [dateTime, setDateTime] = useState('');
//   const [location, setLocation] = useState('');
//   const [maxPeople, setMaxPeople] = useState('');
//   const [createEvent] = useMutation(CREATE_EVENT, {
//     update(cache, { data: { createEvent } }) {
//       const { events } = cache.readQuery({ query: GET_EVENTS });
//       cache.writeQuery({
//         query: GET_EVENTS,
//         data: { events: [createEvent, ...events] },
//       });
//     },
//   });
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await createEvent({
//         variables: { input: { sport, dateTime, location, maxPeople } },
//       });
//       onCreateEvent(data.createEvent);
//       setSport('');
//       setDateTime('');
//       setLocation('');
//       setMaxPeople('');
//     } catch (error) {
//       console.error('Error creating event:', error);
//     }
//   };
//   return (
//     <div className="form-container">
//       <h1>Create an Event</h1>
//       <form className="event-form" onSubmit={handleSubmit}>
//         {/* Sport Selection */}
//         <div className="form-group">
//           <label htmlFor="sport">Choose a sport:</label>
//           <select id="sport" value={sport} onChange={(e) => setSport(e.target.value)}>
//             <option value="">Select a sport</option>
//             <option value="football">Football</option>
//             <option value="baseball">Baseball</option>
//             <option value="basketball">Basketball</option>
//           </select>
//         </div>
//         {/* Date and Time Input */}
//         <div className="form-group">
//           <label htmlFor="dateTime">Date and Time:</label>
//           <input id="dateTime" type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
//         </div>
//         {/* Location Input */}
//         <div className="form-group">
//           <label htmlFor="location">Location:</label>
//           <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
//         </div>
//         {/* Max People Input */}
//         <div className="form-group">
//           <label htmlFor="maxPeople">Maximum People:</label>
//           <input id="maxPeople" type="number" value={maxPeople} onChange={(e) => setMaxPeople(e.target.value)} />
//         </div>
//         {/* Submit Button */}
//         <button type="submit">Create Event</button>
//       </form>
//     </div>
//   );
// };
// CreateEvent.propTypes = {
//   user: PropTypes.object.isRequired,
//   onCreateEvent: PropTypes.func.isRequired,
// };
// export default CreateEvent;


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
    <div className="form-container">
      <h1>Create an Event</h1>
      <form className="event-form" onSubmit={handleSubmit}>
        {/* Sport Selection */}
        <div className="form-group">
          <label htmlFor="sport">Choose a sport:</label>
          <select id="sport" value={sport} onChange={handleSportChange}>
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
          <input id="dateTime" type="datetime-local" value={dateTime} onChange={handleDateTimeChange} />
        </div>
  
        {/* Location Input */}
        <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input id="location" type="text" value={location} onChange={handleLocationChange} />
        </div>
  
        {/* Submit Button */}
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
  
};

// Add prop types validation
CreateEvent.propTypes = {
  onCreateEvent: PropTypes.func.isRequired, // Ensure onCreateEvent is a function and is required
};

export default CreateEvent;
