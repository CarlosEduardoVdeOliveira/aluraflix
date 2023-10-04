import styles from './Card.module.css'
import { videos } from '../../json/db.json'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Card({borderColorPerCategory}){
  return(
    <>
      {
        videos.map(vidoe =>{(
          <Link
            to={vidoe.link}
            className={styles.card}
            style={{border:borderColorPerCategory}}
            key={vidoe.id}
          >
            <img src={vidoe.thumbnail} alt={vidoe.description} />
          </Link>
        )})
      }
    </>
  )
}