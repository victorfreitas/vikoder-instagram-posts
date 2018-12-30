import React, { useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import TodoItem from './TodoItem'

const TodoList = () => {
  const { state: { todos: [...todos] } } = useContext(TodosContext)

  return (
    <ul className="todos">
      {todos.reverse().map(todo => (
        <TodoItem key={todo.id.toString()} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList
