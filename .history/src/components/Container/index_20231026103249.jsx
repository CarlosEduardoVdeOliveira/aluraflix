/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Container.module.css";
import Carousel from "react-material-ui-carousel";
import { Card } from "../Card";
import { Category } from "../Category";
/* import CategoryContext from "../../contexts/contextCategory"; */
/* import VideoContext from "../../contexts/contextVideos"; */
import {categories} from "../../../db.json"

export const Container = ({ id }) => {
  /* const {categories} = useContext(CategoryContext) */
  /* const {videos} = useContext(VideoContext) */
  /* console.log(videos, categories); */
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
            <div className={styles.videoSection}>
              {
                categories.map(category => {
                    return (
                      (<Card
                        {category.videos}
                      />)
                    )
                })
                
              }
            </div>
          </Carousel>
        </section>
      ))}
    </>
  );
};
