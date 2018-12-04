import React, { PureComponent } from 'react'

class Search extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  handleChange({ target: { value } }) {
    this.setState({ value })
  }

  render() {
    const { value } = this.state

    return (
      <form action="" onSubmit={this.handleSubmit}>
        <input
          type="search"
          value={value}
          placeholder="Search..."
          onChange={this.handleChange}
          autoComplete="off"
        />
      </form>
    )
  }
}

export default Search
