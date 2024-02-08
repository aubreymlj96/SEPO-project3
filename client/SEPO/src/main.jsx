// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import Events from './Pages/Myevents.jsx'
// import Home from './Pages/Homepage.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import JoinEvent from './Pages/JoinEvent.jsx'
import MyEvents from './Pages/Myevents.jsx'
import EventPlanner from './Pages/CreateEvent.jsx'
import Login from './Pages/login.jsx'
import SignUp from './Pages/Signup.jsx'
import Home from './Pages/Homepage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'sign up',
        element: <SignUp />
      },
      {
        path: 'join event',
        element: <JoinEvent />
      },
      {
        path: 'my events',
        element: <MyEvents />
      },
      {
        path: 'event planner',
        element: <EventPlanner />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

