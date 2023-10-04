import { Button } from "../Button";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";

export const Category = () => {

  return (
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button color="#fff" bgColor={category.color} 
              onChange={(e)=>console.log(e)}>{category.name}</Button>
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
