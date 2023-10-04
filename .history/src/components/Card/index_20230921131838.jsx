import styles from './Card.module.css'
import { videos } from '../../json/db.json'
import { Link } from 'react-router-dom'

export default function Card(){
  return(
    <>
      {
        videos.map(vidoe =>{(
          <Link to={vidoe.link} className={styles.card}>
            <img src={vidoe.thumbnail} alt={vidoe.description} />
          </Link>
        )})
      }
    </>
  )
}