import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import Exercises from '../../components/Exercises/Exercises'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
function Home () {
  return (
    <div className={styles.container}>
      <Hero />
      <SearchExercises />
      <Exercises />

    </div>
  )
}

export default Home
