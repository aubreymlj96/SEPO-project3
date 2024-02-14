const { gql } = require('apollo-server-express');


//  location: String!

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    events: [Sport]
  }

  type Sport {
    _id: ID!
    name: String!
    players: Int!
    eventCreator: String!
    eventText: String!
    createdAt: String!
    comments: [Comment]!
    eventType: String!
    playerIds: [User]
    location: String!
  }

  type Comment {
    _id: ID!
    commentText: String!
    commentAuthor: String!
    createdAt: String!
  }

  type Auth {
    token: String!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events: [Sport]
    event(eventId: ID!): Sport
    me: User
   
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(eventText: String!, name: String!, players: String, eventType: String!, userId: ID!, location: String!): Sport
    addComment(eventId: ID!, commentText: String!, username: String!):Sport
    removeEvent(eventId: ID!, userId: ID!): Sport
    removeComment(eventId: ID!, commentId: ID!): Sport
    joinEvent(userId: ID!, sportId: ID!, ): Sport
  }
`;

module.exports = typeDefs;
