import React, { useContext, memo } from 'react'

import styles from './Spinner.module.css'
import TodosContext from '../context/TodosContext'

const Spinner = () => {
  const { state: { isWait } } = useContext(TodosContext)

  return (
    isWait
      ? <div className={styles.spinner} />
      : null
  )
}

export default memo(Spinner)
