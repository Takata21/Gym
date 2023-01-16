import React from 'react'
import styles from './BodyPartItem.module.css'
import gymImg from '../../assets/gym.png'
function BodyPartItem ({ part }) {
  return (
    <div className={styles.container}>

      <img src={gymImg} alt='gym image' className={styles.img} />
      <h2>{part}</h2>
    </div>
  )
}

export default BodyPartItem
