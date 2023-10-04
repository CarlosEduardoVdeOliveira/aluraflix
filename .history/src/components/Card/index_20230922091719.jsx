/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export default function Card({
  id,
  link,
  thumbnail,
  description,
  borderColorPerCategory
}){
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