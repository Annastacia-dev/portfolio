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
                <NavLink end to='portfolio'>portfolio</NavLink>
            </li>
            <li>
                <NavLink>
                  <select name="services" id="services">
                    <option value="whatido" defaultValue hidden>what i do</option>
                    <NavLink></NavLink>
                    <option value="brand design"><NavLink>brand design</NavLink></option>
                    <option value="uiux"><NavLink>UI/UX</NavLink></option>
                    <option value="webdevelopment"><NavLink>web development</NavLink></option>
                    <option value="smm"><NavLink>social media management</NavLink></option>
                  </select>
                </NavLink>
            </li>
            <li>
              <button>
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
