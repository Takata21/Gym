import React from 'react'
import styles from './Navbar.module.css'

function Navbar () {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.logo}>
        <img src='/image.webp' width='50px' alt='logo' />
      </div>
      <div className={styles.navbarContent}>
        <ul>
          <li />
        </ul>
      </div>
    </div>
  )
}

export default Navbar
