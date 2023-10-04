import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      {
        videos.map((video) => {
        return(
          <Link 
            to={video.link} 
            key={video.id} 
            className={styles.card} 
            style={{border:border}}
            title={video.description}
          >
            <img src={video.thumbnail} alt="teste" />
          </Link>)
        })
      }
    </section>
  )
}