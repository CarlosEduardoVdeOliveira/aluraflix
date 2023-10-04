/* eslint-disable react/prop-types */
import styles from './Container.module.css'
import {videos, categories} from '../../json/db.json'
import Carousel from 'react-material-ui-carousel'
import { Card } from '../Card'
import { Category } from '../Category'
export const Container = ({id}) => {

  function concte(){
    const videosList = videos.map(video => video.category)
    const categoriesList = categories.map(category => category.name)
    if(videosList === categoriesList){
      console.log('category');
    }
  }
  console.log(concte());

  return(
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            {category.id !== 1 && <Category
              id={id}
              color="#fff" 
              bgColor={category.color}
            
              onClick={()=> console.log('sei lá')}
            >
                {category.name}
            </Category>}
              <Carousel animation="fade" autoPlay>
                <div className={styles.videos}>
                  {
                    videos.map(
                      (video) =>
                        category.name === video.category && (
                          <Card
                            link={video.link}
                            key={video.id}
                            thumbnail={video.thumbnail}
                            borderColor={category.color}
                            description={video.description}
                          />
                        )
                    )
                  }
                </div>
              </Carousel>
          </section>
        ))
      }
    </>
  )
  
}