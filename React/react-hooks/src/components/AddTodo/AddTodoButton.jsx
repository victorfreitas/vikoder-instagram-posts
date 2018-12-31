import React, { memo } from 'react'

import Icon from '../Icon'

const AddTodoButton = () => (
  <button className="add-todo-button">
    Add <Icon icon="plus" alt="Add todo" />
  </button>
)

export default memo(AddTodoButton)
