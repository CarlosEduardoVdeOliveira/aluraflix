
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
            <section className={styles.container} key={video.id}>
              <Button bgColor={category.color}>
                {category.name}
              </Button>
              {
              videos.map(video =>(
                <Card {...video} key={video.id} borderColorPerCategory={category.color} />
              ))

              }
            </section>
        )))
      }
  </>
  )
}