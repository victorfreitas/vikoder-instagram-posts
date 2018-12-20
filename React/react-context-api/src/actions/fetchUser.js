import {
  USER_SUCCESS,
  USER_ERROR,
  LOADING,
} from '../action-types'
import request from '../helpers/request'

const { REACT_APP_API_USER: API_USER } = process.env

export default async (dispatch) => {
  const user = await request(API_USER)

  dispatch({
    type: LOADING,
    payload: false,
  })

  if (user.error) {
    dispatch({
      type: USER_ERROR,
      payload: user.error,
    })
    return
  }

  dispatch({
    type: USER_SUCCESS,
    payload: user,
  })
}
