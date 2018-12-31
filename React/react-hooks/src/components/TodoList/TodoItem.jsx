import React from 'react'

import todoPropTypes from './todoPropTypes'
import TodoButtons from './TodoButtons'
import TodoTitle from './TodoTitle'

const TodoItem = ({ todo }) => (
  <li className={`${todo.complete ? 'complete' : ''}`}>
    <TodoTitle todo={todo} />
    <TodoButtons todo={todo} />
  </li>
)

TodoItem.propTypes = todoPropTypes

export default TodoItem
