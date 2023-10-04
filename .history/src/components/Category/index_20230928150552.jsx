/* eslint-disable react/prop-types */
import { Button } from "../Button";

export const Category = ({id, children, color, description, bgColor, onClick}) => {

  return (

      <div 
      className={styles.container} 
      style={{
        backgroundColor: bgColor,
        color: color
      }}
    >
      {children}
    </div>
  );
};
