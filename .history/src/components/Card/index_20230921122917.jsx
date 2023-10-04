import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
    <section className={styles.container}>
      {
        videos.map((video) => {
        return(
          <Link 
            to={video.link} 
            key={video.id} 
            className={styles.card} 
            style={{border:`1px solid`}}
            title={video.description}
            target='_blank'
          >
            <img src={video.thumbnail} alt="teste" />
          </Link>)
        })
      }
    </section>
  )
}