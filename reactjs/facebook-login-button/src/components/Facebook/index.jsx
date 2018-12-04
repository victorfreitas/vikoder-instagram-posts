import React, { PureComponent, Fragment } from 'react'

import UserInfo from './UserInfo'
import ErrorLogin from './ErrorLogin'
import ButtonLogin from './ButtonLogin'

class Facebook extends PureComponent {
  state = {
    error: null,
    loggedIn: false,
    user: {
      name: '',
      email: '',
      picture: {},
    },
  }

  handleClick = () => {
    this.setState({ error: null })
  }

  handleResponse = ({ error, name, email, picture }) => {
    if (error) {
      this.setState({ error })
      return
    }

    this.setState({
      error: null,
      loggedIn: true,
      user: {
        name,
        email,
        picture,
      },
    })
  }

  handleFailure = () => {
    this.setState({
      error: { message: 'Login failure' },
    })
  }

  render() {
    const { loggedIn, user, error } = this.state

    if (loggedIn) {
      return <UserInfo user={user} />
    }

    return (
      <Fragment>
        {error && <ErrorLogin error={error} />}
        <ButtonLogin
          onClick={this.handleClick}
          callback={this.handleResponse}
          onFailure={this.handleFailure}
        />
      </Fragment>
    )
  }
}

export default Facebook
