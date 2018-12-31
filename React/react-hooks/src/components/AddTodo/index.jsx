/**
 * AddTodo.jsx
 * @author vikoder
 */
import React, { useState, useContext } from 'react'

import './style.css'

import TodosContext from '../context/TodosContext'
import { addNewTodo } from '../../actions'
import AddTodoContent from './AddTodoContent'

const AddTodo = () => {
  const [value, setValue] = useState('')
  const { dispatch } = useContext(TodosContext)

  return (
    <AddTodoContent
      value={value}
      handleChange={({ target }) => setValue(target.value)}
      handleSubmit={() => {
        addNewTodo(value, dispatch)
        setValue('')
      }}
    />
  )
}

export default AddTodo
