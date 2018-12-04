import React, { memo } from 'react'
import PropTypes from 'prop-types'

import styles from './UserInfo.module.css'

const UserInfo = ({ user: { name, email, picture } }) => (
  <div className={styles.content}>
    <img
      className={styles.picture}
      src={picture.data.url}
      alt={name}
    />
    <ul className={styles.list}>
      <li className={styles.listItem}>
        {name}
      </li>
      <li className={styles.listItem}>
        {email}
      </li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.object.isRequired,
  }).isRequired,
}

export default memo(UserInfo)
