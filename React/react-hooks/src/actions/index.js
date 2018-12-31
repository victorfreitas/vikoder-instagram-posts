/**
 * actions.js
 * @author vikoder
 */
import axios from 'axios'

const { REACT_APP_API_TODOS } = process.env

const waitTodo = (dispatch) => {
  dispatch({ type: 'WAIT_TODO', payload: true })
}

const errorTodo = (error, dispatch) => {
  dispatch({ type: 'ERROR_TODO', payload: error })
}

export const fetchTodos = async (dispatch) => {
  waitTodo(dispatch)

  const { data, error } = await axios(REACT_APP_API_TODOS, {
    params: {
      _sort: 'id',
      _order: 'desc',
    }
  })
    .catch(error => ({ error }))

  error
    ? errorTodo(error, dispatch)
    : dispatch({ type: 'FETCH_TODOS', payload: data })
}

export const addNewTodo = async (title, dispatch) => {
  waitTodo(dispatch)

  const { data, error } = await axios.post(REACT_APP_API_TODOS, {
    title,
    complete: false,
  })
    .catch(error => ({ error }))

  error
    ? errorTodo(error, dispatch)
    : dispatch({ type: 'ADD_TODO', payload: data })
}

export const updateTodo = (type, todo, dispatch) => {
  axios.put(`${REACT_APP_API_TODOS}/${todo.id}`, todo)

  dispatch({ type, payload: todo })
}

export const toggleTodo = (todo, dispatch) => {
  updateTodo('TOGGLE_TODO', todo, dispatch)
}

export const editTodo = (todo, dispatch) => {
  updateTodo('EDIT_TODO', todo, dispatch)
}

export const removeTodo = (id, dispatch) => {
  axios.delete(`${REACT_APP_API_TODOS}/${id}`)

  dispatch({ type: 'REMOVE_TODO', payload: id })
}
