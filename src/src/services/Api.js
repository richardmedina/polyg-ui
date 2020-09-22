import Axios from 'axios'

const client = Axios.create()

class Api {
  constructor(){

    this.auth = {
      post: (userName, password) =>
        client.post(`/auth`, {userName, password})
    }
  }
}


export default new Api()