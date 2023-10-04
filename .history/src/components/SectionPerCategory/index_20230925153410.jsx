
import {Button} from '../Button'
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
              <Button bgColor={category.color}>
                {category.name}
              </Button>
              <div className={styles.videos}>
                {
                videos.map(video =>(
                  console.log(video.category.length)
                  /* (category.name === video.category) &&
                  <Card 
                    link={video.link}
                    key={video.id}
                    thumbnail={video.thumbnail}
                    borderColor={category.color}
                    description={video.description}
                  /> */
                ))
                }
              </div>
            </section>
        )))
      }
  </>
  )
}