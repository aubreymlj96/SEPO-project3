const { User, sportSchema} = require('../models')
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
    Query: {

    }
};

module.exports = resolvers;