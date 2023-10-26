/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./Container.module.css";
import Carousel from "react-material-ui-carousel";
import { Card } from "../Card";
import { Category } from "../Category";
import {categories, videos} from '../../../db.json'
import CategoryContext from "../../contexts/contextCategory";
import VideoContext from "../../contexts/contextVideos";

export const Container = ({ id }) => {
/*   const {categories} = useContext(CategoryContext)
  const {videos} = useContext(VideoContext)
  console.log(videos, categories); */
  const categoryArray = categories.map(item => item.name)
  return (
    <>
      {
        videos.map((video) =>{ 
          if(categoryArray.includes(video.category)){
            categories.map(item =>{
              if(video.category === item.name){
            (<section className={styles.container} key={item.id !== 1 && (
                  <Category
                    id={id}
                    color="#fff"
                    bgColor={item.color}
                    onClick={() => console.log("sei lá")}
                  >
                    {item.name}
                  </Category>
                )} /><Carousel animation="fade" autoPlay>
                    <div className={styles.videoSection}>
                      {videos.map(video => {
                        return (
                          video.category === item.name && (<Card
                            id={video.id}
                            key={video.id}
                            link={video.link}
                            thumbnail={video.thumbnail}
                            borderColor={item.color}
                            description={video.description} />)
                        );
                      })}
                    </div>
                  </Carousel>
              </section>)
              }
            })
          }
        })
      }
      </>
  );
};
/* p.map(i => {
  if(fc.includes(i.cor)){
      cor.map(item => {
        if(i.cor === item.name){
          console.log(i, item.name)
        }
      })
  }
}) */


/* 

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
                videos.map(video => {
                  return(
                    video.category === category.name && (<Card
                      id={video.id}
                      key={video.id}
                      link={video.link}
                      thumbnail={video.thumbnail}
                      borderColor={category.color}
                      description={video.description}
                    />)
                  )
                })
              }
            </div>
          </Carousel>
        </section>

*/