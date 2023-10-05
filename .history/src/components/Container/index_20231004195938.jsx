/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Container.module.css";
import { videos, categories } from "../../../db.json";
import Carousel from "react-material-ui-carousel";
import { Card } from "../Card";
import { Category } from "../Category";
import { useState } from "react";

export const Container = ({ id }) => {
  const [v, setV] = useState([])
  function isVideoInCategory(){
    const category = categories.map(category => category.name)
    const videoCategory = videos.map(video => video.category)
    setV(...category, ...videoCategory)
  }
  isVideoInCategory()
  console.log(v);
  return (
    <>
      {categories.map((category) => (
        <section className={styles.container} key={category.id}>
          {category.id !== 1 && (
            <Category
              id={id}
              color="#fff"
              bgColor={category.color}
              onClick={() => console.log("sei lá")}
            >
              {category.name}
            </Category>
          )}
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
      ))}
    </>
  );
};
