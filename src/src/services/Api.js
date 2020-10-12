import Axios from 'axios'


const baseURL = 'https://polyg.azurewebsites.net'

const client = Axios.create({
  baseURL
})

class Api {
  constructor(){

    this.auth = {
      post: (userName, password) =>
        client.post(`/auth`, {userName, password})
    }
  }
}


export default new Api()