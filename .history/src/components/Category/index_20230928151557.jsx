/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import styles from "./Category.module.css";

export const Category = ({id, children, color, description, bgColor, onClick}) => {

  return (

      <div 
      className={styles.container} 
      style={{
        backgroundColor: bgColor,
        color: color
      }}
      id={id}
      description={description}
      onClick={()=>onClick}
    >
      {children}
    </div>
  );
};
