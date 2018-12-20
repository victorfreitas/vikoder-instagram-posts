import React from 'react'
import { Link } from 'react-router-dom'

import Menu from './Menu'

const Header = () => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
    <div className="container">
      <Link to="/" className="navbar-brand">
        React Router
      </Link>
      <Menu />
    </div>
  </nav>
)

export default Header
