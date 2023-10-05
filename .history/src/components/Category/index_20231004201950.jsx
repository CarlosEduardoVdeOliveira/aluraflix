/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
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
      {videos.map(
                (video) =>
                  name === video.category && (
                    <Card
                      link={video.link}
                      key={video.id}
                      thumbnail={video.thumbnail}
                      borderColor={category.color}
                      description={video.description}
                      id={video.category}
                    />
                  )
              )}
    </div>
  );
};
