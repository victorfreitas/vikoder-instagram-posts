import React from 'react'
import PropTypes from 'prop-types'

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

TodoButton.propTypes = {
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default TodoButton
