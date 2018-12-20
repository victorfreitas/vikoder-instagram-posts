import React, { memo } from 'react'

import styles from './UserInfo.module.css'

import { Consumer } from '../../contexts/UserContext'

const UserInfo = () => (
  <Consumer>
    {({ user }) => (
      <div className={styles.content}>
        <figure className={styles.avatar}>
          <img src={user.avatar_url} alt={user.name} />
        </figure>

        <div className={styles.vcard}>
          <div className={styles.name}>
            {user.name}
          </div>

          <div className={styles.bio}>
            {user.bio}
          </div>

          <div className={styles.location}>
            {user.location}
          </div>

          <div className={styles.url}>
            <a href={user.html_url}>
              {user.html_url}
            </a>
          </div>
        </div>
      </div>
    )}
  </Consumer>
)

export default memo(UserInfo)
