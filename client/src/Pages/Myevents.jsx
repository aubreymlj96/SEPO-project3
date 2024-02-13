import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../utils/queries';
import EventCard from '../components/EventCard';




const JoinEvent = () => {
    const { loading, error, data } = useQuery(GET_EVENTS);
  console.log(data);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
  
    return (
      <div>
        <h1>Your Events</h1>
        <div className="event-list">
          {data.events.map(event => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      </div>
    );
  };
  
  export default JoinEvent;




// const events = [
//     {
//         id: 1,
//         name: "Basketball Tourtament @ Wash Park",
//         image: '',
//         sport: ' Basketball',
//         description: 'Join us (the bears) at Wash Park for a competitive but fun basketball tournament. Limited Spots available',
//         date: '01/04/2024 11:00 AM EST'
//     },
//     {
//         id: 2,
//         name: "Baseball Game @ Wash Park - Pitchers Needed",
//         image: '',
//         sport: ' Baseball',
//         description: 'Pitchers needed but players of all levels welcome!',
//         date: '01/05/2024 11:00 AM EST'
//     },
//     {
//         id: 3,
//         name: "Football Practice @ Jefferson Park - Beginners Welcome",
//         image: '',
//         sport: ' Football',
//         description: 'Beginner practice for future NFL players - all ages welcome!',
//         date: '01/06/2024 11:00 AM EST'
//     },
//     {
//         id: 4,
//         name: "Basketball Game @ Cheeseman Park",
//         image: '',
//         sport: ' Basketball',
//         description: 'Point guard needed but all levels welcome! 3 spots left',
//         date: '01/07/2024 11:00 AM EST'
//     },
//     {
//         id: 5,
//         name: "FootBall Game @Bear Creek Park",
//         image: '',
//         sport: ' FootBall',
//         description: 'Pick Up Football game, Teams and indivual players welcome!',
//         date: '01/07/2024 11:00 AM EST'
//     },
//     {
//         id: 6,
//         name: "Baseball game @ El Paso Fields",
//         image: '',
//         sport: ' Baseball',
//         description: 'All Skill Levels Welcome',
//         date: '01/07/2024 11:00 AM EST'
//     },
//     {
//         id: 7,
//         name: "FootBall game @ Castle Rock Football Field",
//         image: '',
//         sport: ' FootBall',
//         description: 'All Players Welcome',
//         date: ''
//     },
//     {
//         id: 8,
//         name: "Football game @ Memorial Park field",
//         image: '',
//         sport: ' Football',
//         description: 'Youth Football Game ages 12 and under',
//         date: ''
//     },
//     {
//         id: 9,
//         name: "Basketball game @ 24 hour fitness",
//         image: '',
//         sport: ' Basketball',
//         description: 'Elderly Basketball game ages 75+ only',
//         date: ''
//     },
//     {
//         id: 10,
//         name: "Baseball game @ small field near Costco",
//         image: '',
//         sport: ' Baseball',
//         description: 'All players welcome non competitve baseball game',
//         date: ''
//     },
// ]