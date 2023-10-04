
import TitleCategory from '../TitleCategory/index'
import styles from './Card.module.css'
import {videos, categories } from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
  <>
      {
        categories.map(category =>{
          return(
            <section className={styles.container} key={category.id}>
              <TitleCategory bgColor={category.color}>
                {category.name}
              </TitleCategory>
              {videos}
            </section>
        )})
      }
  </>
  )
}
