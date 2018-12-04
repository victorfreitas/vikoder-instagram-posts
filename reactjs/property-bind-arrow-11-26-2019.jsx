import React, { PureComponent } from 'react'

class Search extends PureComponent {
  state = {
    value: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = ({ target: { value } }) => {
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
