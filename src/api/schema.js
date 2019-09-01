const resolvers = require('./resolvers')
const { makeExecutableSchema } = require('graphql-tools')

const userAttibs = `
    id: ID
    name: String!
    email: String!
    password: String!
`

const typeDefs = `
    type User {
        ${userAttibs}
    }

    type Query {
        getUser(id: ID!): User
        getUsers: [User]

    }

    input UserInput {
        ${userAttibs}
    }

    type Mutation {
        createUser(input: UserInput): User
    }
`

module.exports = makeExecutableSchema({ 
    typeDefs, 
    resolvers 
})