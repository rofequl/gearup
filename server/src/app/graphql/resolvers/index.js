const authResolvers = require('./auth');

const resolvers = {
    Query: {
        ...authResolvers.Query,
    },
    Mutation: {
        ...authResolvers.Mutation,
    },
};

module.exports = resolvers;