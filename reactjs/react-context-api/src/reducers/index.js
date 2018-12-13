import userReducer from './user'
import loadingReducer from './loading'

export default ({ loading, user, error }, action) => ({
  ...userReducer({ user, error }, action),
  loading: loadingReducer(loading, action),
})
