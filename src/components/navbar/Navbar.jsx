import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { CgGym } from 'react-icons/cg'
function Navbar () {
  return (
    <div className='navbarContainer'>
      <div className='logo'>
        <Link to='/'>
          <CgGym size={35} />
        </Link>
      </div>
      <div className='navbarContent'>
        <ul className='linksList'>

          <li className='linkItem'>
            <Link to='/'>Home</Link>
          </li>
          <li className='linkItem'>
            <Link to='/exercises'>
              Exercises
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
