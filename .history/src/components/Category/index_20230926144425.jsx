/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";
import { useState } from "react";

export const Category = ({id, name, description, color}) => {
  const [categoryId, setCategoryId] = useState(0)
  return (
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button color="#fff" bgColor={category.color} id={category.id }
              onClick={()=> console.log(setCategoryId(id))}>{category.name}</Button>
            <Carousel animation="slide" autoPlay >
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
