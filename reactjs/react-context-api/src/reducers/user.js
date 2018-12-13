import { USER_SUCCESS, USER_ERROR } from '../action-types'

export default (state = {}, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return { user: action.payload }

    case USER_ERROR:
      return { error: action.payload }

    default:
      return state
  }
}
