const { gql } = require('graphql-tag')

const authTypeDefs = gql`
    type Query {
        me: User!
    }

    type Mutation {
        register(input: RegisterInput!): RegisterPayload
        login(email: String!, password: String!): AuthPayload!
    }

    input RegisterInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }

    type RegisterPayload {
        success: Boolean!
        message: String!
        user: User
    }

    type AuthPayload {
        success: Boolean!
        message: String!
        token: String!
        expiresIn: String!
        deviceId: String!
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        profilePicture: String
        createdAt: String!
        updatedAt: String!
    }
`

module.exports = authTypeDefs