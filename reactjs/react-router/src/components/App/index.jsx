import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from '../layouts/Header'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import NotFound from '../pages/NotFound'

const App = () => (
  <Router>
    <Fragment>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  </Router>
)

export default App
