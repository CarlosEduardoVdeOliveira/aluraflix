/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import styles from "./Category.module.css";

export const Category = ({id, children, color, description, bgColor}) => {

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
      {children}
    </div>
  );
};
