import React, { PureComponent } from 'react'

import styles from './App.module.css'

import { UserContext } from '../../contexts/UserContext'
import Spinner from '../Spinner'
import ErrorMessage from '../ErrorMessage'
import UserInfo from '../UserInfo'

class App extends PureComponent {
  componentDidUpdate() {
    const { user } = this.context

    if (user.name) {
      document.title = `Profile - ${user.name}`
    }
  }

  render() {
    const { loading, error } = this.context

    return (
      <div className={styles.content}>
        <header className={styles.header}>
          {loading
            ? <Spinner />
            : error
            ? <ErrorMessage />
            : <UserInfo />}
        </header>
      </div>
    )
  }
}

App.contextType = UserContext

export default App
