/* eslint-disable react/prop-types */
import { Button } from "../Button";
import styles from "./Category.module.css";



export const Category = ({id, name, color, description}) => {

  return (
    <>
          <section className={styles.container} key={id}>
            <Button 
              id={id}
              color="#fff" 
              bgColor={color} 
              onClick={()=> (id)}
              title={description}
            >
                {name}
            </Button>
          </section>
    </>
  );
};
