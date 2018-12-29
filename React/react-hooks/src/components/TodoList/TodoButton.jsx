import React, { useContext } from 'react'

import TodosContext from '../context/TodosContext'
import TodoIcon from './TodoIcon'

const TodoButton = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  const toggleTodo = () => {
    dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: todo.id,
    })
  }

  return (
    <button className="todo-button" onClick={toggleTodo}>
      <TodoIcon alt={todo.title} icon="check" />
    </button>
  )
}

export default TodoButton
