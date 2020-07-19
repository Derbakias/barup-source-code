import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id='nav'>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName='nav-active' >Cocktails</NavLink>
        </li>
        <li>
          <NavLink exact to="/bar-stock" activeClassName='nav-active' >Bar Stock</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
