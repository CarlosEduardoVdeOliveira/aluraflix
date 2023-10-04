
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import {videos} from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function SectionPerCategory() {
  return (
    <>
      {
        videos.filter(video => video.category === category)
      }
  </>
  )
}
/* return(
  <section className={styles.container} key={category.id}>
    <TitleCategory bgColor={category.color}>
      {category.name}
    </TitleCategory>
  </section> */