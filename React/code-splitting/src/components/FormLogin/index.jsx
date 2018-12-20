import React, { PureComponent } from 'react'

import './style.scss'
import FormFields from './FormFields'

class FormLogin extends PureComponent {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state

    return (
      <form
        action=""
        className="form-login"
        onSubmit={this.handleSubmit}
      >
        <h2>Login</h2>
        <FormFields
          handleChange={this.handleChange}
          email={email}
          password={password}
        />
      </form>
    )
  }
}

export default FormLogin
