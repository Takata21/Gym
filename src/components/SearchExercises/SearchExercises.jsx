import React from 'react'
import styles from './SearchExercises.module.css'
function SearchExercises () {
  return (
    <div className={styles.SearchContainer}>
      <h2 className={styles.searchTitle}>awesome exercises  you <br /> should know</h2>
      <div className={styles.searchFormControl}>
        <input type='text' className={styles.searchInput} placeholder='Search Exercises' />
        <button type='submit' className={styles.SearchBtn}>Search</button>
      </div>
    </div>
  )
}

export default SearchExercises
