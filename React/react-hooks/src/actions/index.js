/**
 * actions.js
 * @author vikoder
 */
import axios from 'axios'

const { REACT_APP_API_TODOS } = process.env

const waitMe = async () => new Promise((resolve) => {
  setTimeout(resolve, 80)
})

export const fetchTodos = async (dispatch) => {
  const { data } = await axios(REACT_APP_API_TODOS)

  await waitMe()

  dispatch({ type: 'FETCH_TODOS', payload: data })
}

export const addNewTodo = async (title, dispatch) => {
  const { data } = await axios.post(REACT_APP_API_TODOS, {
    title,
    complete: false,
  })

  dispatch({ type: 'ADD_TODO', payload: data })
  fetchTodos(dispatch)
}

export const updateTodo = async (type, todo, dispatch) => {
  await axios.put(`${REACT_APP_API_TODOS}/${todo.id}`, todo)

  dispatch({ type, payload: todo.id })
  fetchTodos(dispatch)
}

export const toggleTodo = (todo, dispatch) => {
  updateTodo('TOGGLE_TODO', todo, dispatch)
}

export const editTodo = (todo, dispatch) => {
  updateTodo('EDIT_TODO', todo, dispatch)
}

export const removeTodo = async (id, dispatch) => {
  await axios.delete(`${REACT_APP_API_TODOS}/${id}`)

  dispatch({ type: 'REMOVE_TODO', payload: id })
  fetchTodos(dispatch)
}
