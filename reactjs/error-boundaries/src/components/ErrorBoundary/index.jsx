import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './style.scss'

class ErrorBoundary extends PureComponent {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch({ message, stack }, { componentStack }) { // error, info
    const { componentName } = this.props

    // Error reporting service
    fetch('/report/error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        componentName,
        message,
        stack,
        componentStack,
      }),
    })
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    if (!hasError) {
      return children
    }

    return (
      <div className="error-boundary">
        <h2>Something went wrong.</h2>
        <details>
          <summary>Details</summary>
          <p>Our team has been notified</p>
        </details>
      </div>
    )
  }
}

ErrorBoundary.propTypes = {
  componentName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default ErrorBoundary
