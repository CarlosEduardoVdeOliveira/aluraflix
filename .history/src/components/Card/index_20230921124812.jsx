import { Link } from 'react-router-dom'
import TitleCategory from '../TitleCategory'
import styles from './Card.module.css'
import {videos, categories} from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
  <>
      {
        categories.map(category =>{(
          <section className={styles.container}>
            <TitleCategory />
          </section>
        )})
      }
   </>
  )
}