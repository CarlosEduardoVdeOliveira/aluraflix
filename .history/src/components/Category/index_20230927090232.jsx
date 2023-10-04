/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";



export const Category = ({id, name, color, description}) => {

  return (
    <>
      <Button 
        id={id}
        color={"#FFF"} 
        bgColor={color} 
        onClick={()=> (id)}
        title={description}
        borderColor={color} 
color
title
onClick
id
      >
          {name}
      </Button>
    </>
  );
};
