import React, { useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import EmptyTodos from './EmptyTodos'
import Todos from './Todos'

const TodoList = () => {
  const { state: { isWait, todos } } = useContext(TodosContext)

  return (
    isWait
      ? null
      : todos.length
      ? <Todos todos={todos} />
      : <EmptyTodos />
  )
}

export default TodoList
