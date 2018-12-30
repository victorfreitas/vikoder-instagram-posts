/**
 * (React Hooks v16.7.0-alpha.2) useContext and useReducer
 * @author vikoder
 */
import React from 'react'

import './style.css'

import { Provider } from '../context/TodosContext'
import TodoList from '../TodoList'
import AddTodo from '../AddTodo'
import Spinner from '../Spinner'

const App = () => (
  <Provider>
    <div className="App">
      <div className="App-header">
        <h1>Todo List</h1>
        <Spinner />
        <AddTodo />
        <TodoList />
      </div>
    </div>
  </Provider>
)

export default App
