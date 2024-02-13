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
import PropTypes from 'prop-types';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_EVENT } from '../utils/mutations';
import { GET_EVENTS } from '../utils/queries';
import  Auth  from '../utils/auth';
 
const CreateEvent = ({ onCreateEvent }) => {
  let user = Auth.loggedIn() ? Auth.getProfile().data._id : "";
  const [sport, setSport] = useState('');
  const [players, setPlayers] = useState('');
  const [name, setName] = useState('');
  const [eventText, setEventText] = useState('');
  // const [dateTime, setDateTime] = useState('');
  // const [location, setLocation] = useState('');
  // const [maxPeople, setMaxPeople] = useState('');

  const [addEvent] = useMutation(CREATE_EVENT)
  //   {

  //   update(cache, { data: { createEvent } }) {
  //     const { events } = cache.readQuery({ query: GET_EVENTS });
  //     cache.writeQuery({
  //       query: GET_EVENTS,
  //       data: { events: [createEvent, ...events] },
  //     });
  //   },
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(sport, name, user, eventText, players);
    try {
      const { data } = await addEvent({
        variables:  { eventType:sport, name:name, players:players, userId: user, eventText:eventText } },
      );
      // onCreateEvent(data.createEvent);
      setSport('');
      // setDateTime('');
      // setLocation('');
      // setMaxPeople('');
      setName('');
      setPlayers('');
      setEventText('');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh", marginBottom: "5vh" }}>
      <div className="row">
        <div className="col">
          <div className="text-center">
            <h1>Create an Event</h1>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Sport Selection */}
            <div className="mb-3">
              <label htmlFor="sport" className="form-label">Choose a sport:</label>
              <select id="sport" className="form-select" value={sport} onChange={(e) => setSport(e.target.value)}>
                <option value="">Select a sport</option>
                <option value="Football">Football</option>
                <option value="Baseball">Baseball</option>
                <option value="Basketball">Basketball</option>
              </select>
            </div>
  
            {/* Players */}
            <div className="mb-3">
              <label htmlFor="players" className="form-label">Players:</label>
              <input id="players" type="number" className="form-control" value={players} onChange={(e) => setPlayers(e.target.value)} />
            </div>
  
            {/* Event Name */}
            <div className="mb-3">
              <label htmlFor="eventName" className="form-label">Name:</label>
              <input id="eventName" type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
  
            {/* Event Text */}
            <div className="mb-3">
              <label htmlFor="eventText" className="form-label">Text:</label>
              <input id="eventText" type="text" className="form-control" value={eventText} onChange={(e) => setEventText(e.target.value)} />
            </div>
  
            {/* Submit Button */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Create Event</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
  
};

CreateEvent.propTypes = {
  user: PropTypes.object.isRequired,
  onCreateEvent: PropTypes.func.isRequired,
};

export default CreateEvent;



      /* Date and Time Input
        <div className="form-group">
          <label htmlFor="dateTime">Date and Time:</label>
          <input id="dateTime" type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
        </div> */
  
        /* Location Input */
        /* <div className="form-group">
          <label htmlFor="location">Location:</label>
          <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div> */

        /* Max People Input */
        /* <div className="form-group">
          <label htmlFor="maxPeople">Maximum People:</label>
          <input id="maxPeople" type="number" value={maxPeople} onChange={(e) => setMaxPeople(e.target.value)} />
        </div> */
