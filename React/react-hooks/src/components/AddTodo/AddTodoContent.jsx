import React from 'react'
import PropTypes from 'prop-types'

import AddTodoForm from './AddTodoForm'
import AddTodoField from './AddTodoField'
import AddTodoButton from './AddTodoButton'

const AddTodoContent = ({ handleSubmit, value, handleChange }) => (
  <div className="add-todo">
    <AddTodoForm handleSubmit={handleSubmit}>
      <AddTodoField
        value={value}
        handleChange={handleChange}
      />
      <AddTodoButton />
    </AddTodoForm>
  </div>
)

AddTodoContent.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default AddTodoContent
