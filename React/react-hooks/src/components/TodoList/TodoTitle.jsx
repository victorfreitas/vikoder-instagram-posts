import React, { useState, useContext } from 'react'

import TodosContext from '../context/TodosContext'

const TodoTitle = ({ todo }) => {
  const [value, setValue] = useState(todo.title)
  const { dispatch } = useContext(TodosContext)

  const handleBlur = () => {
    if (todo.title !== value) {
      dispatch({ type: 'EDIT_TODO', payload: { ...todo, title: value } })
    }
  }

  return (
    <input
      className="title"
      value={value}
      disabled={todo.complete}
      onFocus={e => e.target.select()}
      onBlur={handleBlur}
      onChange={({ target }) => setValue(target.value)}
    />
  )
}

export default TodoTitle
