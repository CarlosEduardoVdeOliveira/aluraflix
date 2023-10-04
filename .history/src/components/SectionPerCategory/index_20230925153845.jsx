
import {Button} from '../Button'
import styles from './SectionPerCategory.module.css'
import {videos, categories} from '../../json/db.json'
import {Card} from '../Card'
import { useState } from 'react'

export const SectionPerCategory = () => {
  const [category, setCategory] = useState([])
  function filterCategory(category){
    videos.map(video => (
      setCategory(video.category === category)
    ))
  }
  return (
  <>
      {
        categories.map(category => (
          (
            <section className={styles.container} key={category.id}>
              <Button bgColor={category.color}>
                {filterCategory(category.name)}
              </Button>
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