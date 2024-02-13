import React, { useState } from 'react';
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

const Home = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [filteredEvents, setFilteredEvents] = useState('')

  const handleLogin = () => {
    if (username === 'username' && password === 'password') {
      // setLoggedIn(true);

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

  return (
    <div className='container'>
      {loggedIn ? (
        <div className='homeBody'>
          <h2 className='welcomeMessage'>Welcome, {username}!</h2>
          <button className='logoutButton' onClick={handleLogout}>Logout</button>
          <div className='locationInput'>
            <input type='text' value={locationInput} onChange={handleLocationChange} placeholder='Enter Location'/>
          </div>
          <div className="aboutMessage">
            <h2 className='sectionHeader'>Why Choose SEPO?</h2>
            <p className='message1'>SEPO brings people together through sports. This application allows promoters and teams alike to create/coordinate sport events. With SEPO, you can build your own squad and connect with like-minded sport enthusiasts.</p>
            <h2 className='sectionHeader'>Meet New People</h2>
            <p className='message1'>New in town? Want to broaden your social circle? SEPO offers the chance to interact with various teams weekly, followed by post-game gatherings.</p>
            <h2 className='sectionHeader'>Exercise Routine</h2>
            <p className='message1'>Seeking motivation to stay active? Our events cater to various levels of competitiveness, ensuring you can choose the intensity that aligns with your fitness aspirations.</p>
            <h2 className='sectionHeader'>Try New Sports</h2>
            <p className='message1'>No need to commit to a sport that you are uncertain about. All events contain specifics about skill level. All you have to do is arrive and give it a try!</p>
          </div>
          <h2 className='sectionHeader'>Upcoming Events</h2>
          <div className='eventCards'>
            {filteredEvents.map((event, index) => (
                <div className='card' key={index}>
                    <h3 className='eventTitle'>{event.name}</h3>
                    <p className='eventDescription'>{event.description}</p>
                </div>
            ))}
          </div>
        </div>
      ) : (
        <div className='mainHeader'>
          	<h1 data-heading="Friends, Fitness, Fun!">
		          <span contenteditable data-heading="Friends, Fitness, Fun!">Friends, Fitness, Fun!</span>
	          </h1>
        {/* <h1 id='cube-text'>Friends, Fitness, Fun!</h1> */}
        <div className='homeBody'>
        <img src="./shutterstock_1684288108.jpg" alt="sports-img" id="sports-img"/>
          {/* <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='loginButton' onClick={handleLogin}>Login</button> */}
          {error && <p className='errorMessage'>{error}</p>}
          <div className="aboutMessage">
            {/* <h1 data-heading="Why Choose Sepo">
		          <span contenteditable data-heading="Why Choose Sepo? ">Why Choose Sepo?</span>
	          </h1> */}
            <h2 className='sectionHeader'>Why Choose SEPO?</h2>
            <p className='message1'>SEPO brings people together through sports. This application allows promoters and teams alike to create/coordinate sport events. With SEPO, you can build your own squad and connect with like-minded sport enthusiasts.</p>
            <h2 className='sectionHeader'>Meet New People</h2>
            <p className='message1'>New in town? Want to broaden your social circle? SEPO offers the chance to interact with various teams weekly, followed by post-game gatherings.</p>
            <h2 className='sectionHeader'>Exercise Routine</h2>
            <p className='message1'>Seeking motivation to stay active? Our events cater to various levels of competitiveness, ensuring you can choose the intensity that aligns with your fitness aspirations.</p>
            <h2 className='sectionHeader'>Try New Sports</h2>
            <p className='message1'>No need to commit to a sport that you are uncertain about. All events contain specifics about skill level. All you have to do is arrive and give it a try!</p>
          </div>
          <div className="eventCards2">
        <h2>Sports Available</h2>
      <div className='card2Pos'>
     <div className="card">
       <h3>Baseball</h3>
       <a href="/join events">
         <img class="pp-images2" src="/shutterstock_336247391.jpg" alt="trees"/>
       </a>            
       </div>
     <div className="card">
       <h3>Basketball</h3>
       <a href="/join events">
         <img class="pp-images2" src="/shutterstock_190192655.jpg" alt="trees"/>
       </a>            
       </div>
     <div className="card">
       <h3>Football</h3>
       <a href="/join events">
         <img class="pp-images2" src="/shutterstock_1243509136.jpg" alt="trees"/>
       </a>            
       </div>
       </div>
   </div>
    </div>
     </div>
      )}
 </div>
  );
};

export default Home;