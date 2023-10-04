
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import { categories, videos } from '../../json/db.json'
import Card from '../Card'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export default function SectionPerCategory() {
  const [color, setColor] = useState('');
  const [ar, setAr] = useState('');
  function filterVideosPerCategory(category){
    const videosPerCategory = videos.filter(video =>  video.category === category)
    if (videosPerCategory) {
      
    }
  }
  return (
  <>
      {
        categories.map(category =>{
          return(
            <section className={styles.container} key={category.id}>
              <TitleCategory bgColor={category.color}>
                {category.name}
              </TitleCategory>
              
            {filterVideosPerCategory(<Card borderColorPerCategory={category.color}/>)}
            </section>
        )})
      }
  </>
  )
}
