/**
 * TodoList.jsx
 * @author vikoder
 */
import React, { useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import EmptyTodos from './EmptyTodos'
import Todos from './Todos'

const TodoList = () => {
  const {
    state: { todos: [...todos], isWait }
  } = useContext(TodosContext)

  return (
    todos.length
      ? <Todos todos={todos} />
      : isWait
      ? null
      : <EmptyTodos />
  )
}

export default TodoList
