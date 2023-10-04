/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";
import {  categories } from "../../json/db.json";
/* 
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";
*/

export const Category = ({id}) => {

  return (
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button color="#fff" bgColor={category.color} id={id}
              onClick={()=> (category.id)}>{category.name}</Button>
            {/* <Carousel animation="slide" autoPlay >
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

            </Carousel> */}
          </section>
        ))
      }
    </>
  );
};
