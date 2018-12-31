import React from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ children, handleSubmit }) => (
  <form
    className="add-todo-form"
    onSubmit={(event) => {
      event.preventDefault()
      handleSubmit()
    }}
  >
    {children}
  </form>
)

AddTodoForm.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AddTodoForm
