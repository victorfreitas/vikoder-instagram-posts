import mongoose from 'mongoose'

// mongodb://localhost:27017/dbname
const { MONGO_URI } = process.env

const onConnect = () => {
  console.log('MongoDB', 'Is connected')
}

const onError = ({ message }) => {
  console.log('MongoDB', `Error: ${message}`)
}

mongoose.set('useCreateIndex', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

mongoose
  .connect(MONGO_URI)
  .then(onConnect)
  .catch(onError)

export default mongoose
