import React, { useState, useEffect } from 'react'

import './style.css'
import Body from './Body'

const App = () => {
  const [count, setCount] = useState(0)
  const [mouseMove, setMouseMove] = useState({ x: 0, y: 0 })

  useEffect(() => { // Similar to componentDidMount:
    window.addEventListener('mousemove', handleMouseMove)
  }, []) // use empty array for don't update on state change

  useEffect(() => { // Similar to componentDidMount and componentDidUpdate:
    document.title = `Counter: ${count}`
  }, [count])

  useEffect(() => {
    // ... subscribe
    return () => { // Similar to componentWillUnmount
      // ... unsubscribe
    }
  })

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    setMouseMove({ x, y })
  }

  return (
    <Body
      count={count}
      mouseMove={mouseMove}
      onClick={() => setCount(prevState => prevState + 1)}
    />
  )
}

export default App
// (React v16.7.0-alpha.2) useState and useEffect Hook
