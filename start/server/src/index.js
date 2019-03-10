const { ApolloServer } = require('apollo-server')
// Imports the Apollo Server class from apollo-server package.
const  { typeDefs } = require('./schema')
// Imports the typeDef schema containing types for the application.

const server = new ApolloServer({ typeDefs })

server.listen().then(({ url }) => {
 console.log(`Server ready at ${url}`)
})