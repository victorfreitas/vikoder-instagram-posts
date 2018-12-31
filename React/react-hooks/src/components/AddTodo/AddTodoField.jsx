import React from 'react'
import PropTypes from 'prop-types'

const AddTodoField = ({ value, handleChange }) => (
  <input
    className="add-todo-field"
    value={value}
    placeholder="Add new todo"
    onChange={handleChange}
  />
)

AddTodoField.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AddTodoField
