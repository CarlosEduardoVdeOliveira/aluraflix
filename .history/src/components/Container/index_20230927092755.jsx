/* eslint-disable react/prop-types */
import styles from './Container.module.css'
import {videos, categories} from '../../json/db.json'
import { Button } from '../Button'
import Carousel from 'react-material-ui-carousel'
import { Card } from '../Card'
export const Container = ({id}) => {
  return(
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button
              id={id}
              color="#fff" 
              bgColor={category.color} 
              onClick={()=> category.id}
            >
                {category.name}
            </Button>
              <Carousel animation="slide" autoPlay >
                <div className={styles.videos}>

                    category.name === videos.category && (
                      <Card
                        {...videos}
                      />

                </div>

              </Carousel>
          </section>
        ))
      }
    </>
  )
  
}