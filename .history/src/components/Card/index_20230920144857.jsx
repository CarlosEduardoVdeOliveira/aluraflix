import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  return (
    <section className={styles.container}>
      {
        videos.map(item => {
         <Link to="#" key={item.id} className={styles.card} style={{border:border}}>
              <img src={item.thumbnail} alt="teste" />
            </Link>
        })
      }
    </section>
  )
}