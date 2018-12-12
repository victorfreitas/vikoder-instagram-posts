import React from 'react'
import PropTypes from 'prop-types'

const Body = ({ count, mouseMove, handleClick }) => (
  <div className="App">
    <header className="App-header">
      <div className="counter">
        <h2>Counter</h2>
        <strong>
          {count}
        </strong>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>

      <div className="mouse-position">
        <h2>Mouse Position</h2>
        <p>
          X:&ensp;
          <strong>{mouseMove.x}</strong>
        </p>
        <p>
          Y:&ensp;
          <strong>{mouseMove.y}</strong>
        </p>
      </div>

      <div
        className="circle"
        style={{
          top: `${mouseMove.y}px`,
          left: `${mouseMove.x}px`,
        }}
      />
    </header>
  </div>
)

Body.propTypes = {
  count: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  mouseMove: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
}

export default Body
