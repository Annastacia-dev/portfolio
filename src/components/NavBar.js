import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/bluelogo.png';
import '../css/navbar.css'

const NavBar = () => {
  return (
    <div>
      <nav>
        <NavLink className="logo">
          <img src={logo} alt="" style={{"width": "30px"}} />
          <span>annastacia.</span>
        </NavLink>
        <div className="navbar">
          <ul>
            <li>
                <NavLink>home</NavLink>
            </li>
            <li>
                <NavLink>about me</NavLink>
            </li>
            <li>
                <NavLink>portfolio</NavLink>
            </li>
            <li>
                <NavLink>
                  <select name="services" id="services">
                    <option value="whatido" selected defaultValue hidden>what i do</option>
                    <option value="brand design"><NavLink>brand design</NavLink></option>
                    <option value="uiux"><NavLink>UI/UX</NavLink></option>
                    <option value="webdevelopment"><NavLink>web development</NavLink></option>
                    <option value="smm"><NavLink>social media management</NavLink></option>
                  </select>
                </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
