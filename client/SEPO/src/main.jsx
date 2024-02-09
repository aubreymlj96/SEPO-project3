import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import JoinEvent from './Pages/JoinEvent.jsx'
import MyEvents from './Pages/Myevents.jsx'
import CreateEvent from './Pages/CreateEvent.jsx'
import Login from './Pages/login.jsx'
import SignUp from './Pages/Signup.jsx'
import Home from './Pages/Homepage.jsx'

// Define handleCreateEvent function
const handleCreateEvent = (newEvent) => {
  console.log('Creating event:', newEvent);
  // Your logic to handle creating an event
}

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
        path: 'create event',
        element: <CreateEvent onCreateEvent={handleCreateEvent} /> // Pass onCreateEvent prop
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
