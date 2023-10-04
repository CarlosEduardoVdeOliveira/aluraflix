import { TitleCategory } from "../TitleCategory";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";
import { useState } from "react";

export const Category = () => {
    
  return (

    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <TitleCategory color="#fff" bgColor={category.color}>{category.name}</TitleCategory>
            <Carousel next={handleNextSlide} prev={handlePrevSlide} >
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
