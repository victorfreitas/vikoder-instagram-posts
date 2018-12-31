import React from 'react'

import Icon from '../Icon'

const TodoButton = ({ icon, handleClick }) => (
  <button
    className={`todo-button ${icon}`}
    onClick={handleClick}
  >
    <Icon
      icon={icon}
      alt={`Todo ${icon}`}
    />
  </button>
)

export default TodoButton
