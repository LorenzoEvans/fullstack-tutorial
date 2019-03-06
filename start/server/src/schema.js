import {typeDefs} from '../../../final/client/src/resolvers'
const { gql } = require('apollo-server')

const typeDefs = gql `
 
 type Query {
  launches: [Launch]!
  launch(id: ID!): Launch
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

}

enum PatchSize {
 # Must be defined because it's attached to a Mission field.
 # enum's are custom GQL values that return one of a set of values.
 SMALL
 LARGE
}

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