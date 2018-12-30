import React, { useContext, Fragment } from 'react'

import TodosContext from '../context/TodosContext'
import TodoButton from './TodoButton'

const TodoButtons = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  const dispatchTodo = (type) => {
    dispatch({ type, payload: todo.id })
  }

  return (
    <Fragment>
      <TodoButton
        icon="check"
        color="4e9450"
        handleClick={() => dispatchTodo('TOGGLE_TODO')}
      />
      <TodoButton
        icon="trash"
        color="963d3b"
        handleClick={() => dispatchTodo('REMOVE_TODO')}
      />
    </Fragment>
  )
}

export default TodoButtons
