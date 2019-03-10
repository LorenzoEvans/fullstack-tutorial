import {typeDefs} from '../../../final/client/src/resolvers'
const { gql } = require('apollo-server')
// ^ Imports graphql from Apollo Server.

const typeDefs = gql `
 
 type Query {
  launches: [Launch]!
  # launches => Query for a non-null list of launches that may themselves be null.
  launch(id: ID!): Launch
  # launch(id: ID!) => Query for a specific launch, based on a non-null ID, that may return
  # a null launch.
  me: User
 }

 type Launch {
  # Must be defined because it's attached to a Query field.
  id: ID!
  site: String
  mission: Mission
  rocket: Rocket
  isBooked: Boolean!
 }

 type Rocket {
  # Must be defined because it's attached to a Launch field.
  id: ID!
  name: String
  type: String
 }

 type User {
  id: ID! 
  email: String!
  trips: [Launch]!
 }

type Mission {
 # Must be defined because it's attached to a Launch field.
 name: String
 missionPatch(size: PatchSize): String
} 

type TripUpdateResponse {
 S
}

enum PatchSize {
 SMALL
 LARGE
}
# enum's are custom GQL values that return one of a set of values.
# enum PatchSize must be defined because it's attached to a Mission field.

type Mutation {
 bookTrips(launchIds: [ID]!): TripUpdateResponse!
 # ^ If false, booking trips failed 
 cancelTrip(launchId: ID!): TripUpdateResponse!

 login(email: String): String
 
}

`



module.exports = {
 typeDefs,
}