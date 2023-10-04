/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";



export const Category = ({id, name, color, description, bgColor}) => {

  return (
    <>
      <Button 
        id={id}
        color={"#F5F5F5"} 
        bgColor={bgColor} 
        onClick={()=> (id)}
        title={description}
        borderColor={color} 
      >
        {name}
      </Button>
    </>
  );
};
