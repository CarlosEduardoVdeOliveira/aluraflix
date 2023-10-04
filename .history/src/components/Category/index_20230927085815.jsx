/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";
import { categories } from "../../json/db.json";



export const Category = ({id, name, color, description}) => {

  return (
    <>
          <section className={styles.container} key={id}>
            <Button 
              id={id}
              color="#fff" 
              bgColor={color} 
              onClick={()=> (id)}
            >
                {name}
            </Button>
          </section>
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
