/**
 * TodosContext.jsx
 * @author vikoder
 */
import React, { createContext, useReducer, useEffect } from 'react'

import todosReducer from '../../reducers/todosReducer'
import { fetchTodos } from '../../actions'

const initialState = { todos: [], isWait: true }
const TodosContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState)

  useEffect(() => {
    fetchTodos(dispatch)
  }, [])

  return (
    <TodosContext.Provider value={{state, dispatch}}>
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContext
