const { RESTDataSource } = require('apollo-datasource-rest')
//  Sets up an in memory cache that stores responses from our resources.
//  This may be referred to as partial query caching.
class LaunchAPI extends RESTDataSource {
 constructor(){
  super()
  this.baseURL = 'https://api.spacexdata.com/v2/'
 }

 async getAllLaunches() { 
  const response = await this.get('launches')
  return Array.isArray(response) ? 
   response.map(launch => this.launchReducer(launch)) :
   []
 }
}

module.exports = LaunchAPI