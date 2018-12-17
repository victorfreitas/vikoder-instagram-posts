import React, { Suspense, lazy } from 'react'

import './style.css'
import Spinner from '../Spinner'

const FormLogin = lazy(() => import('../FormLogin'))

const App = () => (
  <div className="App">
    <header className="App-header">
      <Suspense fallback={<Spinner />}>
        <FormLogin />
      </Suspense>
    </header>
  </div>
)

export default App
