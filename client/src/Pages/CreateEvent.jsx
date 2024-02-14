


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
   const [DateTime, setDateTime] = useState('');
   const [location, setLocation] = useState('');
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
    console.log(sport, name, user, eventText, players, location);
    try {
      const { data } = await addEvent({
        variables:  {  eventType:sport, name:name, players:players, userId: user, eventText:eventText, DateTime:DateTime, location:location } },
      );
      // onCreateEvent(data.createEvent);
      setSport('');
       setDateTime('');
       setLocation('');
      // setMaxPeople('');
      setName('');
      setPlayers('');
      setEventText('');
    } catch (error) {
      console.error('Error creating event:', error);
    }
  };

  return (
    <div className="container2 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-3">
          <h1 className="text-center">Create an Event</h1>
          <form onSubmit={handleSubmit}>
            {/* Sport Selection */}
            <div className="form-group">
              <label htmlFor="sport">Choose a sport:</label>
              <select className="form-control" id="sport" value={sport} onChange={(e) => setSport(e.target.value)}>
                <option value="">Select a sport</option>
                <option value="Football">Football</option>
                <option value="Baseball">Baseball</option>
                <option value="Basketball">Basketball</option>
              </select>
            </div>
            {/* Date and Time Input */}
            <div className="form-group">
              <label htmlFor="dateTime">Date and Time:</label>
              <input className="form-control" id="dateTime" type="datetime-local" value={DateTime} onChange={(e) => setDateTime(e.target.value)} />
            </div>
            {/* Location Input */}
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input className="form-control" id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="players">Players:</label>
              <input className="form-control" id="players" type="number" value={players} onChange={(e) => setPlayers(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="name">Event Name:</label>
              <input className="form-control" id="eventName" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="eventText">Event Text:</label>
              <input className="form-control" id="eventText" type="text" value={eventText} onChange={(e) => setEventText(e.target.value)} />
            </div>
            {/* Submit Button */}
            <div className="text-center">
              <button className="btn btn-primary mt-3" type="submit">Create Event</button>
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
