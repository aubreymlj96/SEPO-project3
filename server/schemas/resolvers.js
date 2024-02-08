const { User, Sport } = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('events')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('events')
        },
        events: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Sport.find(params).sort({ createdAt: -1 });
        },
        event: async (parent, { eventId }) => {
            return Thought.find({ _id: eventId })
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('events')
            }
            throw AuthenticationError
        },
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user }
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw AuthenticationError
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw AuthenticationError
            }

            const token = signToken(user);
            return { token, user };
        },
        addEvent: async (parent, { eventText, eventCreator, name, players, eventType, userId }, context) => {
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
            throw AuthenticationError;
            ('You must be logged in to create an event');
        },
        addComment: async (parent, { eventId, commentText, username }) => {
            if (username) {
                return Sport.findOneAndUpdate(
                    { _id: eventId },
                    {
                        $addToSet: {
                            comments: { commentText, commentAuthor: username },
                        },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw AuthenticationError;
        },
        removeEvent: async (parent, {  userId, eventId }) => {
            if (userId) {
                const event = await Sport.findOneAndDelete({
                   _id: eventId



                });
                await User.findOneAndUpdate(
                    {_id: userId},
                    {$pull: { events: eventId } }
                );
                return event;
            }
            throw AuthenticationError;
        },
        removeComment: async (parent, { eventId, commentId }, context) => {
            console.log(eventId, commentId)
            if (commentId) {
              const updatedSport = await Sport.findOneAndUpdate(
                { _id: eventId },
                {
                  $pull: {
                    comments: {
                       _id:commentId,
                    },
                  },
                },
                { new: true }
              );
              console.log(updatedSport);
              return updatedSport;
            }
            // throw AuthenticationError;
          },


    }
};

module.exports = resolvers;