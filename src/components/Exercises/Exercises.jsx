import React from 'react'
import { ExerciseCard } from '../ExerciseCard/ExerciseCard'
import styles from './Exercises.module.css'
function Exercises () {
  return (
    <section className={styles.exercises}>
      <h2 className={styles.title}>Showing Results</h2>
      <div className={styles.exercisesCards}>
        <ExerciseCard />
        <ExerciseCard />
        <ExerciseCard />
      </div>
    </section>
  )
}

export default Exercises
