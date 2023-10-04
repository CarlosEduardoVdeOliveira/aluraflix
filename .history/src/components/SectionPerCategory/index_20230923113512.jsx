
import {Button} from '../Button'
import styles from './SectionPerCategory.module.css'
import {videos} from '../../json/db.json'
import {Card} from '../Card'
import { useState } from 'react'

export const SectionPerCategory = () => {
  const [category, setCategory] = useState([])
  const [video, setVideo] = useState([])

  return (
  <>
      {
        videos.map(video =>{
          return(
            <section className={styles.container} key={video.id}>
              <Button bgColor="#1f1f">
                {video.category}
              </Button>
              { video.category && <Card {...video} key={video.id} />}
            </section>
        )})
      }
  </>
  )
}