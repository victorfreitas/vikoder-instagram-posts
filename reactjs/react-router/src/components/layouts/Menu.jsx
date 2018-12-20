import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link className="nav-link" to="/">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/about">
        About
      </Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/contact">
        Contact
      </Link>
    </li>
  </ul>
)

export default Menu
