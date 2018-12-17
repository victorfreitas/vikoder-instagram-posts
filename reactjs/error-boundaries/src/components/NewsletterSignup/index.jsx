import React, { PureComponent } from 'react'

import './style.scss'

class NewsletterSignup extends PureComponent {
  state = {
    email: '',
    hasError: false,
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ email: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ hasError: true })
  }

  render() {
    const { email, hasError } = this.state

    // Simulation an error
    if (hasError) {
      throw new Error('NewsletterSignup error')
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="email"
          onChange={this.handleChange}
          value={email}
          className="field-email"
          placeholder="Join our newsletter"
        />
        <button type="submit" className="button">
          ⮕
        </button>
      </form>
    )
  }
}

export default NewsletterSignup
