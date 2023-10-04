
import TitleCategory from '../TitleCategory/index'
import styles from './Card.module.css'
import { categories } from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
  <>
      {
        categories.map(category =>{
          return(
            <section className={styles.container} key={category.id}>
              <TitleCategory bgColor={category.color}>
                {category.name}
              </TitleCategory>
              {
              videos.map((video) => {
              return(
                <Link 
                  to={video.link} 
                  key={video.id} 
                  className={styles.card} 
                  style={{border:`1px solid ${
                    category.color
                  }`}}
                  title={video.description}
                  target='_blank'
                >
                  <img src={video.thumbnail} alt="teste" />
                </Link>)
              })
            }
            </section>
        )})
      }
  </>
  )
}