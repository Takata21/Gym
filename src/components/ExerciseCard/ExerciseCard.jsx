import React from 'react'
import styles from './ExerciseCard.module.css'
export function ExerciseCard () {
  return (
    <div className={styles.container}>
      <img src='http://d205bpvrqc9yn1.cloudfront.net/0007.gif' alt='' height={325} />
      <div className={styles.targets}>
        <span>back</span>
        <span>last</span>
      </div>
      <h2 className={styles.title}>name</h2>
    </div>
  )
}
