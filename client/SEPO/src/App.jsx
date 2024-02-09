import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/header';
import CreateEvent from './Pages/CreateEvent'; // Correct import

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

function App() {
  const handleCreateEvent = (newEvent) => {
    console.log('Creating event:', newEvent);
    // Your logic to handle creating an event
  };

  return (
    <ApolloProvider client={client}>
      <Header/>
      <Navbar />
      <Outlet />
      <Footer />
      {/* <CreateEvent onCreateEvent={handleCreateEvent} /> */}
       {/* Pass onCreateEvent function */}
    </ApolloProvider>
  );
}

export default App;
