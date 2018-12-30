import React, { useState, useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import { addNewTodo } from '../../actions'
import AddTodoField from './AddTodoField'
import AddTodoButton from './AddTodoButton'

const AddTodo = () => {
  const [value, setValue] = useState('')
  const { dispatch } = useContext(TodosContext)

  return (
    <div className="add-todo">
      <AddTodoField
        value={value}
        handleChange={({ target }) => setValue(target.value)}
      />
      <AddTodoButton
        handleClick={() => {
          addNewTodo(value, dispatch)
          setValue('')
        }}
      />
    </div>
  )
}

export default AddTodo
