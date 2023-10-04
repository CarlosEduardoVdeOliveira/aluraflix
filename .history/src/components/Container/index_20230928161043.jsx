/* eslint-disable react/prop-types */
import styles from './Container.module.css'
import {videos, categories} from '../../json/db.json'
import Carousel from 'react-material-ui-carousel'
import { Card } from '../Card'
import { Category } from '../Category'
export const Container = ({id}) => {

function filtered(){
  const category = categories.map(item => item.name)
  return {...videos, ...category}
}
  console.log(filtered());
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