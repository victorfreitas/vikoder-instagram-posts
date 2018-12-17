import React, { PureComponent, Fragment } from 'react'

import './style.scss'

class Counter extends PureComponent {
  state = {
    counts: 0,
  }

  handleClick = () => {
    this.setState(({ counts }) => ({
      counts: counts + 1,
    }))
  }

  render() {
    const { counts } = this.state

    // Simulation an error
    if (counts === 3) {
      throw new Error('Counter error!')
    }

    return (
      <Fragment>
        <p>
          {counts}
        </p>
        <button
          onClick={this.handleClick}
          className="button"
        >
          Click Me
        </button>
      </Fragment>
    )
  }
}

export default Counter
