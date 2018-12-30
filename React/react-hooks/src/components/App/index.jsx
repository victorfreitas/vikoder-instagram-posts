/**
 * (React Hooks v16.7.0-alpha.2) useContext and useReducer
 * @author vikoder
 */
import React, { useContext, useReducer } from 'react'

import './style.css'

import TodosContext, { Provider } from '../context/TodosContext'
import todosReducer from '../../reducers/todosReducer'
import TodoList from '../TodoList'
import AddTodo from '../AddTodo'

const App = () => {
  const initialState = useContext(TodosContext)
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="App-header">
          <h1>Todo List</h1>
          <AddTodo />
          <TodoList />
        </div>
      </div>
    </Provider>
  )
}

export default App
