import styles from './Card.module.css'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export default function Card({link,
  id,
  thumbnail,
  description, borderColorPerCategory}){
  return(
    <>
      <Link
        to={link}
        className={styles.card}
        style={{border:borderColorPerCategory}}
        key={id}
      >
        <img src={thumbnail} alt={description} />
      </Link>

    </>
  )
}