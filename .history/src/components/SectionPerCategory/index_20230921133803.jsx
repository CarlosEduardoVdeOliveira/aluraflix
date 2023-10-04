
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import { categories, videos } from '../../json/db.json'
import Card from '../Card'

// eslint-disable-next-line react/prop-types
export default function SectionPerCategory() {
  function filterVideosPerCategory(category){
    const videosPerCategory = videos.filter(video => {
      video.category === category 
    })
    return videosPerCategory
  }
  return (
  <>
      {
        categories.map(category =>{
          console.log(filterVideosPerCategory(category.name));
          return(
            <section className={styles.container} key={category.id}>
              <TitleCategory bgColor={category.color}>
                {category.name}
              </TitleCategory>
              
            </section>
        )})
      }
  </>
  )
}
