import React from 'react'

import Icon from '../Icon'

const AddTodoButton = ({ handleClick }) => (
  <button
    className="add-todo-button"
    onClick={handleClick}
  >
    Add <Icon icon="plus" alt="Add todo" />
  </button>
)

export default AddTodoButton
