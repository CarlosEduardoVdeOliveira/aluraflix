
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import {videos} from '../../json/db.json'
import Card from '../Card'
// import { useState } from 'react'

export default function SectionPerCategory() {
/*   const [category, setCategory] = useState([])
  const [video, setVideo] = useState([]) */
  return (
  <>
      {
        videos.map(video =>{
          return(
            <section className={styles.container} key={video.id}>
              <TitleCategory bgColor={video.color}>
                {video[0].category}
              </TitleCategory>
              { video.category && <Card {...video} key={video.id} />}
            </section>
        )})
      }
  </>
  )
}











/* 
"categories":[
  {"name":"Font End", "color":"#6BD1FF", "id":1},
  {"name":"Back End", "color":"#69953B", "id":2},
  {"name":"UX", "color":"#DC6EBE", "id":3},
  {"name":"Infra" , "color":"#9CD33B", "id":4},
  {"name":"marketing", "color":"#6B5BE2", "id":5},
  {"name":"Data Science", "color":"#9CD33B", "id":6},
  {"name":"inovation", "color":"#FF8C2A", "id":7},
  {"name":"Mobile", "color":"#FFBA05", "id":8}
]*/