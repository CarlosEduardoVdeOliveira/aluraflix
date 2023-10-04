import { TitleCategory } from "../TitleCategory";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";
import { useRef } from "react";

export const Category = () => {
  function verifyCategory(category){
    const vcat = videos.some(vc => vc.category === category)
    return vcat
  }
    console.log(verifyCategory("Front End"));
    const sliderRef = useRef(null);
  return (

    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <TitleCategory color="#fff" bgColor={category.color}>{category.name}</TitleCategory>
            <Carousel ref={ sliderRef } >
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
