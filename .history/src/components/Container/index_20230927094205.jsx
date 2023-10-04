/* eslint-disable react/prop-types */
import styles from './Container.module.css'
import {videos, categories} from '../../json/db.json'
import { Button } from '../Button'
import Carousel from 'react-material-ui-carousel'
import { Card } from '../Card'
import { Category } from '../Category'
export const Container = ({id}) => {
  return(
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Category
              id={id}
              color="#fff" 
              bgColor={category.color} 
              onClick={()=> category.id}
            >
                {category.name}
            </Category>
              <Carousel animation="fade" autoPlay>
                <div className={styles.videos}>
                  {videos.map(
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
                  )}
                </div>
              </Carousel>
          </section>
        ))
      }
    </>
  )
  
}