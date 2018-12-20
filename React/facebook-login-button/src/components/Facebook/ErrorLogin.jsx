import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './ErrorLogin.module.css'

const ErrorLogin = ({ error }) => (
  <div className={styles.content}>
    {error.message}
  </div>
)

ErrorLogin.propTypes = {
  error: PropTypes.object.isRequired,
}

export default memo(ErrorLogin)
