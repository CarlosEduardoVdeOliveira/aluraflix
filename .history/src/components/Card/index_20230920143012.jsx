import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import initReact from '../../assets/initReact.png'
import videos from '../../json/db.json'
// eslint-disable-next-line react/prop-types

export default function Card({border}) {
  return (
    <section className={styles.container}>
      {
        videos.map(video =>(
        <Link to="#" key={video.id} className={styles.card} style={{border:border}}>
          <img src={video.thumbnail} alt="teste" />
        </Link>
        ))
      }
    </section>
  )
}