import Axios from 'axios'


let baseURL = 'https://polyg.mycleverapp.com/api'
baseURL = 'https://polyg.azurewebsites.net/api'
const client = Axios.create({
  baseURL
})

class Api {
  constructor(){

    this.auth = {
      post: (userName, password) =>
        client.post(`/auth`, {userName, password})
    }

    this.languages = {
      getAll: () =>
        client.get(`/languages`)
    }
  }
}


export default new Api()