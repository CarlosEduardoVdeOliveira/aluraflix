/* eslint-disable react/prop-types */
import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

export const Card = ({
  uuidv4(),
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
        key={uuidv4()}
        target='_blank'
        title={description}
      >
        <img src={thumbnail} alt={description} />
      </Link>

    </>
  )
}