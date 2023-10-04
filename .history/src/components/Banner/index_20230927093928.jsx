/* eslint-disable react/prop-types */
import styles from './Banner.module.css'
import {videos, categories} from '../../json/db.json'
import { Card } from '../Card';
import { useState } from 'react';
import { Category } from '../Category';

export const Banner = ({banner}) => {
  let [highlightCategory, setHighlightCategory] = useState(0)
  function findVideo() {
    return videos.find(video => video.category === categories[highlightCategory].name)
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
            <Category id={setHighlightCategory(highlightCategory)}
              bgColor={categories[highlightCategory].color}
              color="#f5f5f5"
              description={categories[highlightCategory].description}
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
