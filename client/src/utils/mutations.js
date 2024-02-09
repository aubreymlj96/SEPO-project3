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

export const SAVE_EVENT = gql`
    mutation saveEvent($name: String!, $description: String!, $sport: String!){
        saveEvent(description: $description, sport: $sport){
            _id
            username
            email
            savedEvents{
                _id
                name
                sport
                description
                participants
                time
        }
    }
} 
`;