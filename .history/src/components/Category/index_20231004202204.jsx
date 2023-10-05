/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Card } from "../Card";
import styles from "./Category.module.css";

export const Category = ({id, color, description, bgColor, videos, name}) => {

  return (

      <div 
      className={styles.container} 
      style={{
        backgroundColor: bgColor,
        color: color
      }}
      id={id}
      description={description}
    >
      {

      videos.length > 0 ? videos.map(
                (video) =>
                  name === video.category && (
                    <Card
                      link={video.link}
                      key={video.id}
                      thumbnail={video.thumbnail}
                      borderColor={color}
                      description={video.description}
                      id={video.category}
                    />
                  )
              ): ""
        }
    </div>
  );
};
