import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink end to='/' className="logo">
          <span>annastacia .</span>
        </NavLink>
        <div className="navbar">
          <ul>
            <li>
                <NavLink end to='/'>home</NavLink>
            </li>
            <li>
                <NavLink end to='/about'>about me</NavLink>
            </li>
            <li>
                <NavLink end to='/portfolio'>portfolio</NavLink>
            </li>
            <li className="dropdown">
                  <button className="dropbtn">
                    What I do
                    <i className="fa-solid fa-angle-down"></i>
                  </button>
                  <div className="dropdown-content">
                    <NavLink>brand design</NavLink>
                    <NavLink>UI/UX</NavLink>
                    <NavLink>web development</NavLink>
                    <NavLink>Social media management</NavLink>
                  </div>
            </li>
            <li>
              <button className='quote'>
                Get a quote
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
