const { createYoga, createSchema } = require('graphql-yoga')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const schema = createSchema({
    typeDefs, resolvers
})
const yoga = createYoga({
    schema, context: ({ request }) => ({ request })
})

module.exports = yoga