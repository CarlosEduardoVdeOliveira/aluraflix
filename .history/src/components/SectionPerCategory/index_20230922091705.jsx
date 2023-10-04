
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import { videos } from '../../json/db.json'
import Card from '../Card'

export default function SectionPerCategory() {

  return (
  <>
      {
        videos.map(category =>{
          return(
            <section className={styles.container} key={category.id}>
              <TitleCategory bgColor={category.color}>
                {category.name}
              </TitleCategory>
              
              {videos.map(video => (
                video.category === category.name && <Card {...video} key={video.id} />
              ))}
            </section>
        )})
      }
  </>
  )
}
