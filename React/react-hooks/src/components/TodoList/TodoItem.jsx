import React from 'react'

import TodoButton from './TodoButton'
import TodoTitle from './TodoTitle'

const TodoItem = ({ ...todo }) => (
  <li className={`${todo.complete ? 'complete' : ''}`}>
    <TodoTitle title={todo.title} />
    <TodoButton todo={todo} />
  </li>
)

export default TodoItem
