/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {categories} from '../../../db.json'
import { Card } from '../Card';
import { useState } from 'react';
import { Category } from '../Category';

export const Banner = ({banner}) => {
  let [highlightCategory, setHighlightCategory] = useState(1)
  function findVideo() {
    return categories.map(category => category.videos.find(video => video.category === categories[highlightCategory].name))
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
            <Category id={highlightCategory}
              bgColor={categories[highlightCategory].color}
              color="#f5f5f5"
              description={categories[highlightCategory].description}
              onClick={()=> console.log(setHighlightCategory(highlightCategory))}
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
            {...findVideo()}
            borderColor={categories[highlightCategory].color}
          />
        </div>
        )
      }
    </>
  );
}
