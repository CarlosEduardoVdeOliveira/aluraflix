
/* import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css' */
import {videos} from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function SectionPerCategory() {
  let c = (videos)
  console.log(c);
  return (
    <>
      {
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