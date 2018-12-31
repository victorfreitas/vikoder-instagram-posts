import React from 'react'

import AddTodoField from './AddTodoField'
import AddTodoButton from './AddTodoButton'

const AddTodoContent = ({ value, handleChange, handleClick }) => (
  <div className="add-todo">
    <AddTodoField
      value={value}
      handleChange={handleChange}
    />
    <AddTodoButton handleClick={handleClick} />
  </div>
)

export default AddTodoContent
