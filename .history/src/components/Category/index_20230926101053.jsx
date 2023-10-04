import { TitleCategory } from "../TitleCategory";
import styles from "./Category.module.css";
import { videos, categories } from "../../json/db.json";
import Carousel from 'react-material-ui-carousel'
import { Card } from "../Card";

export const Category = () => {
  function verifyCategory(category){
    const vcat = videos.some(vc => vc.category === category)
    return vcat
  }
    console.log(verifyCategory("Front End"));
  return (
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <TitleCategory bgColor={category.color}>{category.name}</TitleCategory>
            <Carousel >
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
