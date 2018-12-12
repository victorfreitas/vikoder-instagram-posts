import React from 'react'

const Body = ({ count, mouseMove, onClick }) => (
  <div className="App">
    <header className="App-header">
      <div className="counter">
        <h2>Counter</h2>
        <strong>
          {count}
        </strong>
        <button onClick={onClick}>
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

export default Body
