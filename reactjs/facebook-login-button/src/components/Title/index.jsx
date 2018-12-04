import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './Title.module.css'

const Title = ({ title }) => (
  <h2 className={styles.title}>
    {title}
  </h2>
)

Title.propTypes = {
  title: PropTypes.string.isRequired,
}

Title.defaultProps = {
  title: 'Facebook Login',
}

export default memo(Title)
