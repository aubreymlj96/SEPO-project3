const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [Sport]
  
}

type Sport {
    _id: ID
    name: String!
    players: Int
    eventCreator: String
    eventText: String
    createdAt: String
    comments: [Comment]!
    eventType: String
}




type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    username: String
    createdAt: String
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    events(username: String): [Sport]
    event(eventid: ID!): Sport
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(eventText: String!,  eventCreator: String!, name: String!, players: Int, eventType: String!, userId: ID!): Sport
    addComment(eventId: ID!, commentText: String!, username: String!):Sport
    removeEvent(eventId: ID! userId: ID!): Sport
    removeComment(eventId: ID!, commentId: ID!): Sport
  }
`;

module.exports = typeDefs;


