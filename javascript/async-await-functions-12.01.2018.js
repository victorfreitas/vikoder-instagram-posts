const axios = require('axios')

const API_URL = 'https://api.github.com/users/victorfreitas'

const userPromise = () => (
  axios(API_URL)
    .then(response => console.log(response.data))
    .catch(err => console.log('Error:', err.message))
)

userPromise()

const userAsync = async () => {
  const response = await axios(API_URL)
    .catch(error => ({ error }))

  if (response.error) {
    console.log('Error:', response.error.message)
    return
  }

  console.log(response.data)
}

userAsync()
