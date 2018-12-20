const axios = require('axios')

class User {
  constructor() {
    this.api = 'https://api.github.com/users'
  }

  async getAvatarUrl(username) {
    const { data } = await axios(`${this.api}/${username}`)

    return data.avatar_url
  }
}

const user = new User()

user
  .getAvatarUrl('victorfreitas')
  .then(url => console.log(url))
  .catch(err => console.log('Error:', err.message))
