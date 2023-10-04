
import {TitleCategory} from '../TitleCategory'
import styles from './SectionPerCategory.module.css'
import {videos, categories} from '../../json/db.json'
import {Card} from '../Card'

export const SectionPerCategory = () => {

  return (
  <>
      {
        categories.map(category => (
          (
            <section className={styles.container} key={category.id}>
              <TitleCategory color='withe'>
                {category.name}
              </TitleCategory>
              <div className={styles.videos}>
                {
                videos.map(video =>(
                  (category.name === video.category) &&
                  <Card 
                    link={video.link}
                    key={video.id}
                    thumbnail={video.thumbnail}
                    borderColor={category.color}
                    description={video.description}
                  />
                ))
                }
              </div>
            </section>
        )))
      }
  </>
  )
}