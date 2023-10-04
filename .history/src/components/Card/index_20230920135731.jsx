import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import {img as image} from '../../assets/image.png'
// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      <Link style={{border:border}}>
        <img src={image} alt="teste" />
      </Link>
    </section>
  )
}