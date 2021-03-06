import React from 'react'

import TodoItem from './TodoItem'

const Todos = ({ todos }) => (
  <ul className="todos">
    {todos.map(todo => (
      <TodoItem key={todo.id.toString()} todo={todo} />
    ))}
  </ul>
)

export default Todos
