import { gql } from '@apollo/client';


export const GET_EVENTS = gql`
  query getEvents {
    events {
      _id
      name
      players
      eventCreator
      eventText
      createdAt
      eventType
     location
    }
  }
`;

// players
//       eventCreator
//        
//       playerIds
//       
//        console.log(location);


export const getMapQuestData = async (location) => {
  try {
    console.log(location);
    const MAPQUEST_API_KEY = 'YShBjYux21G3IIZulMOwJ1UqYpLaPAdx';
    const response = await fetch(
      `https://www.mapquestapi.com/geocoding/v1/address?key=${MAPQUEST_API_KEY}&location=${encodeURIComponent(location)}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch location data from MapQuest');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching location data:', error);
    throw error;
  }
};


