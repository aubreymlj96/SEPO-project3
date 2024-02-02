import React from 'react';

const events = [
    {
        id: 1,
        title: "Text Editor",
        image: '/text editor-logos.png',
        sport: 'Basketball',
        description: 'Join us (the bears) at Wash Park for a competitive but fun basketball tourtament ',
    },
]

function MyEvents(){
    return (
        <div className=''>
            <p className=''></p>
            <div className=''>
                {events.map((event, i) =>(
                    <div className='card' key= {i}>
                        <div className='card-image'>
                            <figure className='image col-m'>
                                <a href={event.link}>
                                    <img src={event.image} alt=''/>
                                </a>
                            </figure>
                        </div>
                        <div className=''>
                            <div className='media'>
                                <div className='media-left'>
                                <div className='media-content'>
                                    {/* <p className='title' key={project.id}>
                                        {project.title}
                                    </p> */}
                                </div>
                                </div>
                            </div>
                            <div className=''>
                                {event.description}
                                <br/>
                                <div className=''>
                                    <footer className='card-footer'>
                                        <a href={event.repository} className='card-footer-item'></a>
                                        <a href={event.link} className='card-footer-item'></a>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyEvents;