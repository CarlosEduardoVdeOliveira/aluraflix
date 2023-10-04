
import TitleCategory from '../TitleCategory/index'
import styles from './Card.module.css'
import { categories } from '../../json/db.json'
console.log(categories);
// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
  <>
      {
        categories.map(category =>{(
          <section className={styles.container} key={category.id}>
            <TitleCategory bgColor={category.color}>
              category.name
            </TitleCategory>
          </section>
        )})
      }
  </>
  )
}