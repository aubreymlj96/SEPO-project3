import React, { useState } from 'react';

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [filteredEvents, setFilteredEvents] = useState('')

  const events = [
    { name: 'Baseball', location: 'Denver', description: 'description'},
    { name: 'Basketball', location: 'Colorado Springs', description: 'description'},
    { name: 'Football', location: 'Vail', description: 'description'},
    { name: 'Baseball', location: 'Vail', description: 'description'},
    { name: 'Basketball', location: 'Colorado Springs', description: 'description'},
    { name: 'Football', location: 'Denver', description: 'description'},
    { name: 'Baseball', location: 'Vail', description: 'description'},
    { name: 'Basketball', location: 'Colorado Springs', description: 'description'},
    { name: 'Football', location: 'Denver', description: 'description'},
    { name: 'Baseball', location: 'Vail', description: 'description'},
  ]

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      setLoggedIn(true);
    } else {
      setError('Invalid username or password', error);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleLocationChange = (e) => {
    setLocationInput(e.target.value);
    const filtered = events.filter(event => event.location.toLowerCase().includes(e.target.value.toLowerCase()))
    setFilteredEvents(filtered);
  }

  return Home(
    <div>
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
          <div className='locationInput'>
            <input type='text' value={locationInput} onChange={handleLocationChange} placeholder='Enter Location'/>
          </div>
          <div className="aboutMessage">
            <h2>Why Choose SEPO?</h2>
            <p className='message1'>SEPO brings people together through sports. This application allows promoters and teams alike to create/coordinate sport events. With SEPO, you can build your own squad and connect with like-minded sport enthusiasts.</p>
            <h2>Meet New People</h2>
            <p className='message1'>New in town? Want to broaden your social circle? SEPO offers the chance to interact with various teams weekly, followed by post-game gatherings.</p>
            <h2>Exercise Routine</h2>
            <p className='message1'>Seeking motivation to stay active? Our events cater to various levels of competitiveness, ensuring you can choose the intensity that aligns with your fitness aspirations.</p>
            <h2>Try New Sports</h2>
            <p className='message1'>No need to commit to a sport that you are uncertain about. All events contain specifics about skill level. All you have to do is arrive and give it a try!</p>
          </div>
          <h2>Upcoming Events</h2>
          <div className='eventCards'>
            {filteredEvents.map((event, index) => (
                <div className='card' key={index}>
                    <h3>{event.name}</h3>
                    <p>{event.description}</p>
                </div>
            ))}
          </div>
          {/* <h2>Upcoming Events</h2>
          <div className="eventCards">
            <div className="card">
              <h3>Event 1</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 2</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 3</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 4</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 5</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 6</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 7</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 8</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 9</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 10</h3>
              <p>Description</p>
            </div>
          </div> */}
        </div>
      ) : (
        <div>
          {/* <h2>Login</h2> */}
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
          {/* {error && <p>{error}</p>} */}
          <div className="aboutMessage">
            <h2>Why Choose SEPO?</h2>
            <p className='message1'>SEPO brings people together through sports. This application allows promoters and teams alike to create/coordinate sport events. With SEPO, you can build your own squad and connect with like-minded sport enthusiasts.</p>
            <h2>Meet New People</h2>
            <p className='message1'>New in town? Want to broaden your social circle? SEPO offers the chance to interact with various teams weekly, followed by post-game gatherings.</p>
            <h2>Exercise Routine</h2>
            <p className='message1'>Seeking motivation to stay active? Our events cater to various levels of competitiveness, ensuring you can choose the intensity that aligns with your fitness aspirations.</p>
            <h2>Try New Sports</h2>
            <p className='message1'>No need to commit to a sport that you are uncertain about. All events contain specifics about skill level. All you have to do is arrive and give it a try!</p>
          </div>
          {/* <div className="eventCards">
            <div className="card">
              <h3>Event 1</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 2</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 3</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 4</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 5</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 6</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 7</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 8</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 9</h3>
              <p>Description</p>
            </div>
            <div className="card">
              <h3>Event 10</h3>
              <p>Description</p>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Home;