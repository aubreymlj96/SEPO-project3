const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    events: [ID]!
}

type Event {
    _id: ID
    name: String!
    players: Int
    eventCreator: String
    eventText: String
    createdAt: Stringcd sepo
    comments: [Comment]!

}

type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
}

type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(name: String!, players: Int!, eventText: String!): Event
    addComment(eventId: ID!, commentText: String!): Event
    removeEvent(eventId: ID!): Event
    removeComment(eventId: ID!, commentID: ID!): Event
  }
`;

module.exports = typeDefs;

    // users: [User]
    // user(username: String!): User
    // events(username: String): [sportSchema]
    // event(eventid: ID!): event