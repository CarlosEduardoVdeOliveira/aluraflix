import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import videos from '../../json/db.json'
const colorsCategories = {
  'font-end': '#6BD1FF',
  'back-end': '#69953B',
  'ux': '#DC6EBE',
  'infra': '#9CD33B',
  'marketing': '#6B5BE2',
  'data-science': '#9CD33B',
  'inovation': '#FF8C2A',
  'mobile': '#FFBA05',

}
// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
    <section className={styles.container}>
      {
        videos.map((video) => {
        return(
          <Link 
            to={video.link} 
            key={video.id} 
            className={styles.card} 
            style={{border:`1px solid ${colorsCategories}`}}
            title={video.description}
            target='_blank'
          >
            <img src={video.thumbnail} alt="teste" />
          </Link>)
        })
      }
    </section>
  )
}