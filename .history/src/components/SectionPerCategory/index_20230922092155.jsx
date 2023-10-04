
import TitleCategory from '../TitleCategory/index'
import styles from './SectionPerCategory.module.css'
import videos from '../../json/db.json'
import Card from '../Card'

export default function SectionPerCategory() {

  return (
  <>
      {
        videos.map(video =>{
          return(
            <section className={styles.container} key={video.id}>
              <TitleCategory bgColor={video.color}>
                {video.name}
              </TitleCategory>
              
              {videos.map(video => (
                video.category === video.name && <Card {...video} key={video.id} />
              ))}
            </section>
        )})
      }
  </>
  )
}
