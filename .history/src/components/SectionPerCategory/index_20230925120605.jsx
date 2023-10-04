
import {Button} from '../Button'
import styles from './SectionPerCategory.module.css'
import {videos, categories} from '../../json/db.json'
import {Card} from '../Card'

export const SectionPerCategory = () => {

  return (
  <>
      {
        videos.map(video =>{
          return(
            <section className={styles.container} key={video.id}>
              <Button bgColor="#1f1f">
                {video.category}
              </Button>
              {<Card {...video} key={video.id} />}
            </section>
        )})
      }
  </>
  )
}