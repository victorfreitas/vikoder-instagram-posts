import React, { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'

import todosReducer from '../../reducers/todosReducer'
import { fetchTodos } from '../../actions'

const initialState = {
  todos: [],
  isWait: true,
  error: null,
}

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

Provider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TodosContext
