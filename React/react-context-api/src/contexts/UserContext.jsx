import React, { PureComponent } from 'react'

import reducers from '../reducers'
import fetchUser from '../actions/fetchUser'

export const UserContext = React.createContext({})

class Provider extends PureComponent {
  state = {
    loading: true,
    user: {},
    error: null,
  }

  componentDidMount() {
    fetchUser(this.dispatch)
  }

  dispatch = (action) => {
    this.setState(state => reducers(state, action))
  }

  render() {
    const { children } = this.props

    return (
      <UserContext.Provider value={{ ...this.state }}>
        {children}
      </UserContext.Provider>
    )
  }
}

export default Provider
export const Consumer = UserContext.Consumer
