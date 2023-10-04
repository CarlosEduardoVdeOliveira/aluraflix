/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";
import { categories } from "../../json/db.json";



export const Category = ({id}) => {

  return (
    <>
      {
        categories.map((category) => (
          <section className={styles.container} key={category.id}>
            <Button 
              id={id}
              color="#fff" 
              bgColor={category.color} 
              onClick={()=> console.log(category.id)}
            >
                {category.name}
            </Button>
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
