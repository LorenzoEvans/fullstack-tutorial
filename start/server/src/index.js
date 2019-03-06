const { ApolloServer } = require('apollo-server')
// Imports the Apollo Server class from apollo-server package.
const typeDefs = require('./schema')

const server = new ApolloServer({ typeDefs })