import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import {img} from '../../assets/image.png'
// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      <Link style={{border:border}}>
        <img src={img} alt="" />
      </Link>
    </section>
  )
}