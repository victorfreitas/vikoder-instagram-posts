import React from 'react'

import AddTodoField from './AddTodoField'
import AddTodoButton from './AddTodoButton'

const AddTodoContent = ({ value, handleChange, handleSubmit }) => (
  <div className="add-todo">
    <AddTodoField
      value={value}
      handleChange={handleChange}
    />
    <AddTodoButton handleClick={handleSubmit} />
  </div>
)

export default AddTodoContent
