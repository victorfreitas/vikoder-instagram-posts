const nodeGeocoder = require('node-geocoder')

module.exports = nodeGeocoder({
  provider: 'google',
  apiKey: process.env.GEOCODER_API_KEY,
})
