import React from 'react'
import styles from './Home.module.css'
import Hero from '../../components/Hero/Hero'
import Exercises from '../../components/Exercises/Exercises'
import SearchExercises from '../../components/SearchExercises/SearchExercises'
import BodyParts from '../../components/BodyParts/BodyParts'

function Home () {
  return (
    <>
      <Hero />
      <SearchExercises />
      <BodyParts />
      <Exercises />

    </>
  )
}

export default Home
