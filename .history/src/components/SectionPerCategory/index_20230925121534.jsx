
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
              {
              videos.map(video =>(
              category.name === video.category &&
              (
                <>
                  <Button bgColor={category.color}>
                    {category.name}
                  </Button>
                  <Card {...video} key={video.id} borderColorPerCategory={category.color} />)
                </>
              ))

              }
            </section>
        )))
      }
  </>
  )
}