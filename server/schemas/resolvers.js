const { User, Sport } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => User.find().populate('events'),
    user: async (_, { username }) => User.findOne({ username }).populate('events'),
    events: async (_, { username }) => {
      const params = username ? { username } : {};
      return Sport.find(params).sort({ createdAt: -1 });
    },
    event: async (_, { eventId }) => Sport.findById(eventId),
    me: async (_, __, { user }) => {
      if (user) {
        return User.findById(user._id).populate('events');
      }
      throw new AuthenticationError('You are not authenticated.');
    },
  },
  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect email or password.');
      }
      const correctPassword = await user.isCorrectPassword(password);
      if (!correctPassword) {
        throw new AuthenticationError('Incorrect email or password.');
      }
      const token = signToken(user);
      return { token, user };
    },
    addEvent: async (parent, { eventText, name, players, eventType, userId }, context) => {
        console.log(eventType, name, userId, eventText, players);
        if (userId) {
            const sport = await Sport.create({
                eventText,
                eventCreator: userId,
                name,
                players,
                eventType
                
            });
            await User.findOneAndUpdate(
                { _id: userId },
                { $push: { events: sport._id } }
            );
            return sport;
        }
        // throw AuthenticationError;
        ('You must be logged in to create an event');
    },
    addComment: async (_, { eventId, commentText }, { user }) => {
      if (user) {
        const sport = await Sport.findByIdAndUpdate(
          eventId,
          { $push: { comments: { commentText, commentAuthor: user.username } } },
          { new: true }
        );
        return sport;
      }
      throw new AuthenticationError('You are not authenticated.');
    },
    removeEvent: async (_, { eventId }, { user }) => {
      if (user) {
        const sport = await Sport.findByIdAndDelete(eventId);
        await User.findByIdAndUpdate(user._id, { $pull: { events: eventId } });
        return sport;
      }
      throw new AuthenticationError('You are not authenticated.');
    },
    removeComment: async (_, { eventId, commentId }, { user }) => {
      if (user) {
        const sport = await Sport.findByIdAndUpdate(
          eventId,
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
        return sport;
      }
      throw new AuthenticationError('You are not authenticated.');
    },
  },
};

module.exports = resolvers;
