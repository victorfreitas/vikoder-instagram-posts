import React from 'react'

import './style.css'

import ErrorBoundary from '../ErrorBoundary'
import Counter from '../Counter'
import NewsletterSignup from '../NewsletterSignup'

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1>
        Error Boundaries
      </h1>

      <div className="sections">
        <section className="counter">
          <h2>
            Counter Component
          </h2>
          <ErrorBoundary componentName="Counter">
            <Counter />
          </ErrorBoundary>
        </section>

        <section className="newsletter-signup">
          <h2>
            NewsletterSignup Component
          </h2>
          <ErrorBoundary componentName="NewsletterSignup">
            <NewsletterSignup />
          </ErrorBoundary>
        </section>
      </div>

    </header>
  </div>
)

export default App
