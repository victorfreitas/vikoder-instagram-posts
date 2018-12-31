import React, { useContext, Fragment } from 'react'

import TodosContext from '../context/TodosContext'
import { toggleTodo, removeTodo } from '../../actions'
import todoPropTypes from './todoPropTypes'
import TodoButton from './TodoButton'

const TodoButtons = ({ todo }) => {
  const { dispatch } = useContext(TodosContext)

  return (
    <Fragment>
      <TodoButton
        icon="check"
        handleClick={() => toggleTodo({
          ...todo,
          complete: !todo.complete,
        }, dispatch)}
      />
      <TodoButton
        icon="trash"
        handleClick={() => removeTodo(todo.id, dispatch)}
      />
    </Fragment>
  )
}

TodoButtons.propTypes = todoPropTypes

export default TodoButtons
