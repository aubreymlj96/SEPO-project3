import React from 'react';

const events = [
    {
        id: 1,
        name: "Basketball Tourtament @ Wash Park",
        image: '',
        sport: 'Basketball',
        description: 'Join us (the bears) at Wash Park for a competitive but fun basketball tourtament. Limited Spots available',
        date: '01/04/2024 11:00 AM EST'
    },
    {
        id: 2,
        name: "Baseball Game @ Wash Park - Pitchers Needed",
        image: '',
        sport: 'Baseball',
        description: 'Pitchers needed but players of all levels welcome!',
        date: '01/05/2024 11:00 AM EST'
    },
    {
        id: 3,
        name: "Football Practice @ Jefferson Park - Beginners Welcome",
        image: '',
        sport: 'Football',
        description: 'Beginner practice for future NFL players - all ages welcome!',
        date: '01/06/2024 11:00 AM EST'
    },
    {
        id: 4,
        name: "Basketball Game @ Cheeseman Park",
        image: '',
        sport: 'Basketball',
        description: 'Point guard needed but all levels welcome! 3 spots left',
        date: '01/07/2024 11:00 AM EST'
    },
]

function MyEvents(){
    return (
        <div className='content'>
            <p className='eventTitle'>My Events</p>
            <div className='eventCards'>
                {events.map((event, i) =>(
                    <div className='card eventBox' key= {i}>
                        <p className='innertitle' key={event.id}>
                            {event.name}
                            {event.sport}
                        </p>
                        <div className='eventDescription'>
                            {event.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyEvents;