/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {videos, categories} from '../../json/db.json'
import { Card } from '../Card';
import { useState } from 'react';
import { Category } from '../Category';

export const Banner = ({banner}) => {
  const [highlightCategory, setHighlightCategory] = useState(0)
  function findVideo() {
    return videos.find(video => video.category === categories[highlightCategory].name)
  }
  function findCategory({id}){
    return categories.find(category => category.id === id)
  }
  return(
    <>
      {
        banner && (
        <div className={styles.container}>
          <img className={styles.backgroundImage}
            src={findVideo().thumbnail}
            alt={findVideo().description}
          />
          <div className={styles.content}>
            <Category id={findCategory(highlightCategory)}
              bgColor={categories[highlightCategory].color}
              color="#f5f5f5"
            >
              {categories[highlightCategory].name}
            </Category>
            <h5 >
              {findVideo().name}
            </h5>
            <p>
              {findVideo().description}
            </p>
          </div>
          <Card
            {...videos.find(video => video.category === categories[highlightCategory].name)}
            borderColor={categories[highlightCategory].color}
          />
        </div>
        )
      }
    </>
  );
}
