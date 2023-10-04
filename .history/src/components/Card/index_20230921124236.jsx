import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import {videos, categories} from '../../json/db.json'

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
            style={{border:`1px solid ${
              'blue'
            }`}}
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