import React, { useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { state: { todos } } = useContext(TodosContext)

  return (
    <ul className="todos">
      {todos.map(todo => <TodoItem {...todo} />)}
    </ul>
  )
}

export default TodoList
