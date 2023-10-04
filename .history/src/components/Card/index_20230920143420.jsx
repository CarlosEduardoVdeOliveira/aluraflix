import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card({border}) {
  console.log(videos);
  return (
    <section className={styles.container}>
     {/*  {
        videos.map(video =>(
        <Link to="#" key={video.id} className={styles.card} style={{border:border}}>
          <img src={video.thumbnail} alt="teste" />
        </Link>
        ))
      } */}
    </section>
  )
}