import React, { useState, useContext } from 'react'

import TodosContext from '../context/TodosContext'
import { editTodo } from '../../actions'

const TodoTitle = ({ todo }) => {
  const [value, setValue] = useState(todo.title)
  const { dispatch } = useContext(TodosContext)

  return (
    <input
      className="title"
      value={value}
      disabled={todo.complete}
      onFocus={e => e.target.select()}
      onChange={({ target }) => setValue(target.value)}
      onBlur={() => editTodo({
        ...todo,
        title: value,
      }, dispatch)}
    />
  )
}

export default TodoTitle
