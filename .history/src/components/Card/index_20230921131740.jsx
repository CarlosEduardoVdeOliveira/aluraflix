import styles from './Card.module.css'
import { videos } from '../../json/db.json'

export default function Card(){
  return(
    <>
      {
        videos.map(vidoe =>{(
          <div className={styles.card}>
            <img src="" alt="" />
          </div>
        )})
      }
    </>
  )
}