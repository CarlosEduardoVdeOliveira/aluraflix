
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import { categories, videos } from '../../json/db.json'
import Card from '../Card'
/* import { useState } from 'react' */

// eslint-disable-next-line react/prop-types
export default function SectionPerCategory() {

  const [video, setVideo] = useState([]);
  const [category, setCategory] = useState([]);

   function filterVideosPerCategory(){
    const categoryInVideos = videos.filter(video =>  video.category)
    setCategory([...categoryInVideos])
    console.log(category);
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
              
              {videos.map(video => (
                video.category === category.name && <Card {...video} key={video.id} />
              ))}
            </section>
        )})
      }
  </>
  )
}
