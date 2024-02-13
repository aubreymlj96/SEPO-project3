import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!){
        login(email: $email, password: $password){
            token
            user{
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  } 
`;
export const CREATE_EVENT = gql`
mutation addEvent($eventText: String!, $name: String!, $eventType: String!, $userId: ID!, $players: String) {
    addEvent(eventText: $eventText, name: $name, eventType: $eventType, userId: $userId, players: $players) {
      _id
      name
      players
      eventCreator
      eventText
      createdAt
      eventType
    }
  }
`;

export const JOIN_EVENT = gql`
  mutation JoinEvent($eventId: ID!) {
    joinEvent(eventId: $eventId) {
      _id
      participants {
        _id
      }
    }
  }
`;