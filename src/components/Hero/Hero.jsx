import React from 'react'
import styles from './Hero.module.css'
function Hero () {
  return (
    <div className={styles.HeroContainer}>
      <h4 className={styles.HeroSubtitle}>Fitness club</h4>
      <h2 className={styles.HeroTitle}>Sweat, smile <br /> and repeat</h2>
      <p className={styles.HeroDesc}>check out the most effective exercises for persons</p>
      <a href='#exercises' className={styles.HeroBtn}>explore exercises</a>
      <img className={styles.HeroImg} src='/banner.png' alt='banner' />
      <p className={styles.HeroBackText}>exercises</p>
    </div>
  )
}

export default Hero
