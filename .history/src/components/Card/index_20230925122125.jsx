/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import { Link } from 'react-router-dom'

export const Card = ({
  id,
  link,
  thumbnail,
  description,
  borderColor
}) => {
  return(
    <>
      <Link
        to={link}
        className={styles.card}
        style={{border:`1px solid ${borderColor}`}}
        key={id}
        target='_blank'
      >
        <img src={thumbnail} alt={description} />
      </Link>

    </>
  )
}