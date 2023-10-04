import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import {videos, categories} from '../../json/db.json'

// eslint-disable-next-line react/prop-types
export default function Card() {
  return (
  <>
      {
        categories.map(category =>{(
          console.log(category.name)
        )})
      }
   </>
  )
}