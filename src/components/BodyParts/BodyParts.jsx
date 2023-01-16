import React, { useEffect, useState, useRef } from 'react'
import BodyPartItem from '../BodyPartItem/BodyPartItem'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import Loader from '../Loader/Loader'
import styles from './BodyParts.module.css'

// import getBodyParts from '../../services/getBodyParts'
const data = [
  'all',
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist'
]
function BodyParts () {
  const [bodyOfParts, setBodyOfParts] = useState([])
  const [loading, setLoading] = useState(false)
  const slider = useRef()
  useEffect(() => {
    setLoading(true)
    async function loadBodyParts () {
      // const parts = await getBodyParts()
      // console.log(parts)
      setBodyOfParts(data)
    }
    loadBodyParts()
    setLoading(false)
  }, [])

  const handleClick = (direction) => {
    if (direction === 'left') {
      slider.current.scrollLeft = slider.current.scrollLeft - 910
    } else {
      slider.current.scrollLeft = slider.current.scrollLeft + 910
    }
    console.log(slider.current.scrollLeft)
  }

  if (loading) return <Loader />
  return (
    <>
      <div id='container' className={styles.bodyPartsContainer}>
        <div className={styles.sliderWrapper} ref={slider}>

          {
          bodyOfParts.map((part, item) => <BodyPartItem key={item} part={part} />
          )
        }
        </div>
        <div className={styles.sliderButtons}>
          <button onClick={() => handleClick('left')}><BsArrowLeft size={24} color='red' /></button>
          <button onClick={() => handleClick('right')}><BsArrowRight size={24} color='red' /></button>
        </div>
      </div>
    </>
  )
}

export default BodyParts
