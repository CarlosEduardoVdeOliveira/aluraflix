import { TitleCategory } from "../TitleCategory";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";
import { useState } from "react";

export const Category = () => {
   const [prev, setPrev] = useState(0)
   const [next, setNext] = useState(0)
    const handlePrevSlide = (e) => {
      e.preventDefault();
      if(prev.current){
          prev.current.prev(setPrev(prev+1));
      }
  }
  
  const handleNextSlide = (e) => {
    e.preventDefault();
      if(next.current){
          next.current.next(setNext(next+1));
      }
  }
  return (

    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <TitleCategory color="#fff" bgColor={category.color}>{category.name}</TitleCategory>
            <Carousel ref={ sliderRef } next={handleNextSlide} prev={handlePrevSlide} >
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
  );
};
