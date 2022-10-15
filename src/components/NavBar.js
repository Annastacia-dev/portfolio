import React from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../css/navbar.css'

const NavBar = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/form')
  }
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
                    <NavLink end to='/branddesign'>brand design</NavLink>
                    <NavLink end to='/uiux'>UI/UX</NavLink>
                    <NavLink end to='/webdevelopment'>web development</NavLink>
                    <NavLink end to='/smm'>Social media management</NavLink>
                  </div>
            </li>
            <li>
              <button 
              className='quote'
              onClick={handleClick}>
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
