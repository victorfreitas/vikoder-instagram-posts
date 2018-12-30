import React from 'react'

const AddTodoField = ({ value, handleChange }) => (
  <input
    className="add-todo-field"
    value={value}
    placeholder="Add new todo"
    onChange={handleChange}
  />
)

export default AddTodoField
