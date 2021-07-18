import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
  <nav>
    <div className="nav-wrapper brown lighten-1 px1">
      <a href="/" className="brand-logo center">
        Search for books
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/">Search</NavLink>
        </li>
        <li>
          <NavLink to="/about">Information for developers</NavLink>
        </li>
      </ul>
    </div>
  </nav>
)
