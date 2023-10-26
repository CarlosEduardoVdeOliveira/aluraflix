/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styles from "./Container.module.css";
// import { videos, categories } from "../../../db.json";
import Carousel from "react-material-ui-carousel";
import { Card } from "../Card";
import { Category } from "../Category";
import CategoryContext from "../../contexts/cotextCategory";
import { useContext } from "react";

export const Container = ({ id }) => {
  const {categories} = useContext(CategoryContext)
  return (
    <>
      {categories.map((category) => (
        <section className={styles.container} key={category.id}>
          {category.id !== 1 && (
            <Category
              id={id}
              color="#fff"
              bgColor={category.color}
              onClick={() => console.log("sei lá")}
            >
              {category.name}
            </Category>
          )}
          <Carousel animation="fade" autoPlay>
            <div className={styles.videos}>
              
            </div>
          </Carousel>
        </section>
      ))}
    </>
  );
};
