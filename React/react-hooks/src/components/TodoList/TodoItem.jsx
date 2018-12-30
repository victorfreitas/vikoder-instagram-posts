import React from 'react'

import TodoButtons from './TodoButtons'
import TodoTitle from './TodoTitle'

const TodoItem = ({ todo }) => (
  <li className={`${todo.complete ? 'complete' : ''}`}>
    <TodoTitle todo={todo} />
    <TodoButtons todo={todo} />
  </li>
)

export default TodoItem
