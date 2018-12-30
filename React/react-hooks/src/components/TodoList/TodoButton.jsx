import React from 'react'

import Icon from '../Icon'

const TodoButton = ({ icon, color, handleClick }) => (
  <button
    className={`todo-button ${icon}`}
    onClick={handleClick}
  >
    <Icon
      icon={icon}
      color={color}
      alt={`Todo ${icon}`}
    />
  </button>
)

export default TodoButton
