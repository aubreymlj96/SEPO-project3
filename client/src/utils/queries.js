import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent($input: EventInput!) {
    createEvent(input: $input) {
      _id
      name
      dateTime
      location
    }
  }
`;

export const GET_EVENTS = gql`
  query GetEvents {
    events {
      _id
      name
      dateTime
      location
    }
  }
`;

export const getMapQuestData = async (location) => {
  try {
    const MAPQUEST_API_KEY = 'YShBjYux21G3IIZulMOwJ1UqYpLaPAdx';
    const response = await fetch(
      `https://www.mapquestapi.com/search/v4/place?location=${encodeURIComponent(location)}&key=${MAPQUEST_API_KEY}`
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
