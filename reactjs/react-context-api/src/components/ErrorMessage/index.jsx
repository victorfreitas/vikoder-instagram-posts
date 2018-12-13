import React, { memo } from 'react'

import styles from './ErrorMessage.module.css'

import { Consumer } from '../../contexts/UserContext'

const ErrorMessage = () => (
  <Consumer>
    {({ error }) => (
      <div className={styles.error}>
        {error.message}
      </div>
    )}
  </Consumer>
)

export default memo(ErrorMessage)
