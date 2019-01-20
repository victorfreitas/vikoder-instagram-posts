const mongoose = require('mongoose')

const debug = require('../debug')

const onConnect = () => {
  debug('MongoDB', 'Is connected')
}

const onError = ({ message }) => {
  debug('MongoDB', `Error: ${message}`)
}

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

mongoose
  .connect(process.env.MONGO_URI)
  .then(onConnect)
  .catch(onError)

module.exports = mongoose
